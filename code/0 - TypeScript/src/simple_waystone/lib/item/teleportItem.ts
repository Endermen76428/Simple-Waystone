import { EntityComponentTypes, EquipmentSlot, GameMode, Player, system, Vector3 } from "@minecraft/server"
import { AddonConfig } from "../../variables"
import { apiItemAmount } from "./itemAmount"
import { apiCooldown } from "../apiCooldown"

export const apiTeleportItem = new class ApiTeleportItem {
  [key: string]: (player: Player, pos: Vector3) => boolean

  "ws:warpstone"(player: Player, pos: Vector3): false {
    apiCooldown.set(player, "warpstoneCooldown", AddonConfig.itemCooldown)
    player.dimension.playSound("block.simple_waystone:waystone.teleport", player.location)
    system.run(() => player.dimension.playSound("block.simple_waystone:waystone.teleport", pos))
    return false
  }

  "ws:golden_feather"(player: Player, pos: Vector3): boolean {
    player.dimension.playSound("item.simple_waystone:golden_feather.used", player.location)
    system.run(() => player.dimension.playSound("item.simple_waystone:golden_feather.used", pos))
    if(player.getGameMode() == GameMode.Creative) return false
    const removed = apiItemAmount.decreaseHand(player, "ws:golden_feather")
    return !removed
  }

  "ws:return_scroll"(player: Player, pos: Vector3): boolean {
    player.dimension.playSound("item.simple_waystone:return_scroll.used", player.location)
    system.run(() => player.dimension.playSound("item.simple_waystone:return_scroll.used", pos))
    if(player.getGameMode() == GameMode.Creative) return false
    const item = player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Mainhand)
    if(!item || item.typeId != "ws:return_scroll") return true
    const comp = item.getComponent("durability")
    if(!comp) return true
    if(comp.damage +1 > comp.maxDurability){
      player.getComponent(EntityComponentTypes.Equippable)?.setEquipment(EquipmentSlot.Mainhand, undefined)
      return false
    }
    comp.damage += 1
    player.getComponent(EntityComponentTypes.Equippable)?.setEquipment(EquipmentSlot.Mainhand, item)
    return false
  }
}