import { ItemStack, Player, world } from "@minecraft/server"
import { waystoneRotate, waystonOffset } from "../ui/listUI"
import { waystoneCache } from "../lib/cache/waystone"
import { apiWarn } from "../../0-lib/player/warn"
import { apiTeleportItem } from "../lib/item/teleportItem"

export function boundScroll(player: Player, item: ItemStack): void {
  const pos = item.getDynamicProperty("pos")
  const dim = item.getDynamicProperty("dim")
  if(typeof pos != "object" || typeof dim != "string") return apiWarn.notify(player, "item.warn.simple_waystone:bound_scroll.corrupted", {type: "actionbar", sound: "warn.ender_addon_pack:bass"})

  if(apiTeleportItem["ws:return_scroll"](player, pos)) return

  const id = `${dim}/${pos.x},${pos.y},${pos.z}`
  const cache = waystoneCache.getWaystone(id)
  if(cache == undefined) return apiWarn.notify(player, "item.warn.simple_waystone:bound_scroll.invalid_waystone", {type: "actionbar", sound: "warn.ender_addon_pack:break"})

  const rot = player.getRotation()
  let target = {x: cache.pos.x +0.5, y: cache.pos.y, z: cache.pos.z +0.5}
  if(cache.offset == "auto"){
    const direction = (rot.y < 45 || rot.y > 325) ? "north" : (rot.y > 45 && rot.y < 135) ? "east" : (rot.y > 135 && rot.y < 225) ? "south" : "west"
    const offset = waystonOffset[direction] ?? ["y", 0]
    target[offset[0]] += offset[1]
  } else {
    const offset = waystonOffset[cache.offset] ?? ["y", 0]
    target[offset[0]] += offset[1] *2
  }
  player.teleport(target, {dimension: world.getDimension(dim), rotation: {x: 0, y: waystoneRotate[cache.offset] ?? rot.y}})
}