import { waystoneCache } from "../cache/waystone";
import { AddonConfig } from "../../variables";
import { apiOrganize } from "../apiOrganize";
import { apiConfig } from "../apiConfig";
const showDimension = [["minecraft:overworld", "minecraft:nether", "minecraft:the_end"], ["minecraft:overworld"], ["minecraft:nether"], ["minecraft:the_end"]];
export const waystonesList = new class WaystonesList {
    getPrivateWaystones(player) {
        const config = apiConfig.getConfig(player);
        const dimensionToShow = AddonConfig.tpBetweenDimension ? showDimension[config.showDimension] ?? [] : [player.dimension.id];
        const waystones = [];
        const { private: pri, claim } = waystoneCache.getPlayerWaystoneIds(player.id);
        const privateWaystones = pri.values();
        for (let i = 0, len = pri.size; i < len; i++) {
            const id = privateWaystones.next().value;
            if (!id)
                continue;
            const value = waystoneCache.getWaystone(id);
            if (value && (config.showDimension == 0 || dimensionToShow.includes(value.dimension)))
                waystones.push(value);
        }
        const claimWaystones = claim.values();
        for (let i = 0, len = claim.size; i < len; i++) {
            const id = claimWaystones.next().value;
            if (!id)
                continue;
            const value = waystoneCache.getWaystone(id);
            if (value && (config.showDimension == 0 || dimensionToShow.includes(value.dimension)))
                waystones.push(value);
        }
        return apiOrganize.organizeDimension(player, waystones);
    }
    getPublicWaystones(player) {
        const config = apiConfig.getConfig(player);
        const dimensionToShow = AddonConfig.tpBetweenDimension ? showDimension[config.showDimension] ?? [] : [player.dimension.id];
        const waystones = waystoneCache.getPublicWaystones().filter(value => dimensionToShow.includes(value.dimension));
        return apiOrganize.organizeDimension(player, waystones);
    }
    getPlayerWaystones(playerId) {
        const waystones = [];
        const { private: pri, public: pub } = waystoneCache.getPlayerWaystoneIds(playerId);
        const privateWaystones = pri.values();
        for (let i = 0, len = pri.size; i < len; i++) {
            const id = privateWaystones.next().value;
            if (!id)
                continue;
            const value = waystoneCache.getWaystone(id);
            if (value)
                waystones.push(value);
        }
        const publicWaystones = pub.values();
        for (let i = 0, len = pub.size; i < len; i++) {
            const id = publicWaystones.next().value;
            if (!id)
                continue;
            const value = waystoneCache.getWaystone(id);
            if (value)
                waystones.push(value);
        }
        return waystones;
    }
    findWaystone(dimension, pos) {
        return waystoneCache.getWaystone(`${dimension.replace("minecraft:", "")}/${pos.x},${pos.y},${pos.z}`);
    }
};
