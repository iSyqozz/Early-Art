
//links
export const DISCORD_URL = 'https://discord.gg/NvC69Dwc';
export const TWITTER_URL = 'https://twitter.com/EarlyArt_SOL';
export const EXCHANGE_ART_URL = 'https://exchange.art/series/Kanohi%20Collective/nfts';
export const TENSOR_URL = 'https://www.tensor.trade/trade/hidden_kanohi';


//layer count pre group
export const BackGroundCount = 22;
export const BackGroundItemsCount = 8
export const SkinsCount = 20;
export const SkullsCount = 9;
export const EyeMarkingsCount = 15;
export const HeadWearCount = 17;
export const OutfitsCount = 23;
export const EyesCount = 30;


export function generateLayerNames(layerGroup:string,layerCount:number):string[]{
    const res = []
    for (var i = 0 ;i<layerCount+0; i++){
        const layer = `/assets/banner-layers/${layerGroup}/${i+1}.png`;
        res.push(layer)
    }
    return res
}


//layer interface
export interface layerGroup{
    name:string
    layers:string[]
}



//layerGroup objects
export const layerGroups:layerGroup[] = [
    {
        name:'Backgrounds',
        layers: generateLayerNames('01_Backgrounds',BackGroundCount)
    },
    {
        name:'Background Items',
        layers: generateLayerNames('02_BackgroundItems',BackGroundItemsCount)
    },
    {
        name:'Skins',
        layers: generateLayerNames('03_Skins',SkinsCount)
    },
    {
        name:'Skulls',
        layers: generateLayerNames('04_Skulls',SkullsCount)
    },
    {
        name:'EyeMarkings',
        layers: generateLayerNames('05_EyeMarkings',EyeMarkingsCount)
    },
    {
        name:'HeadWear',
        layers: generateLayerNames('06_Headwear',HeadWearCount)
    },
    {
        name:'Outfits',
        layers: generateLayerNames('07_Outfits',OutfitsCount)
    },
    {
        name:'Eyes',
        layers: generateLayerNames('08_Eyes',EyesCount)
    },

]


export const shouldScale = new Set([
    '/assets/banner-layers/02_BackgroundItems/1.png',
    '/assets/banner-layers/02_BackgroundItems/4.png',
    '/assets/banner-layers/08_Eyes/2.png',
    '/assets/banner-layers/08_Eyes/21.png',
])






