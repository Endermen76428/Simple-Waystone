import { generateNetherWaystone } from "./waystone";
export function structureLoaderManager(block) {
    const exe = structureLoaders[block.typeId];
    if (exe != undefined)
        exe(block);
}
const structureLoaders = {
    "ws:nether_waystone_loader": (block) => generateNetherWaystone(block),
    "ws:basalt_waystone_loader": (block) => generateNetherWaystone(block),
    "ws:crimson_waystone_loader": (block) => generateNetherWaystone(block)
};
