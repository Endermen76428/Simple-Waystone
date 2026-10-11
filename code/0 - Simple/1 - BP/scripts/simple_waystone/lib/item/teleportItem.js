import { EntityComponentTypes, EquipmentSlot, GameMode, ItemComponentTypes, system } from "@minecraft/server";
import { AddonConfig } from "../../variables";
import { apiItemAmount } from "./itemAmount";
import { apiCooldown } from "../apiCooldown";
export const apiTeleportItem = new class ApiTeleportItem {
    "ws:warpstone"(player, pos) {
        player.dimension.playSound("block.simple_waystone:waystone.teleport", player.location);
        system.run(() => player.dimension.playSound("block.simple_waystone:waystone.teleport", pos));
        apiCooldown.set(player, "warpstoneCooldown", AddonConfig.itemCooldown);
        return false;
    }
    "ws:golden_feather"(player, pos) {
        player.dimension.playSound("item.simple_waystone:golden_feather.used", player.location);
        system.run(() => player.dimension.playSound("item.simple_waystone:golden_feather.used", pos));
        if (player.getGameMode() == GameMode.Creative)
            return false;
        const removed = apiItemAmount.decreaseHand(player, "ws:golden_feather");
        return !removed;
    }
    "ws:return_scroll"(player, pos) {
        player.dimension.playSound("item.simple_waystone:return_scroll.used", player.location);
        system.run(() => player.dimension.playSound("item.simple_waystone:return_scroll.used", pos));
        if (player.getGameMode() == GameMode.Creative)
            return false;
        const item = player.getComponent(EntityComponentTypes.Equippable)?.getEquipment(EquipmentSlot.Mainhand);
        if (!item || (item.typeId != "ws:return_scroll" && item.typeId != "ws:bound_scroll"))
            return true;
        const comp = item.getComponent(ItemComponentTypes.Durability);
        if (!comp)
            return true;
        if (comp.damage + 1 > comp.maxDurability) {
            player.getComponent(EntityComponentTypes.Equippable)?.setEquipment(EquipmentSlot.Mainhand, undefined);
            return false;
        }
        comp.damage += 1;
        player.getComponent(EntityComponentTypes.Equippable)?.setEquipment(EquipmentSlot.Mainhand, item);
        return false;
    }
};
