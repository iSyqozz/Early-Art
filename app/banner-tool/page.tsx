'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TWITTER_URL } from '@/constants'

import { layerGroup, layerGroups, shouldScale } from '@/constants'
import { Tooltip } from 'react-tooltip'
import html2canvas from 'html2canvas'


const Home = () => {

  //banner text
  const [FontSize, setFontSize] = useState(25);
  const [bannerText, setBannerText] = useState('');


  //layers
  const [BannerBackground, setBannerBackground] = useState('/assets/banner-layers/01_Backgrounds/1.png');
  const [BackgroundItem, setBackgroundItem] = useState('/assets/banner-layers/02_BackgroundItems/1.png');
  const [Skin, setSkin] = useState('/assets/banner-layers/03_Skins/1.png');
  const [Skull, setSkull] = useState('/assets/banner-layers/04_Skulls/1.png');
  const [EyeMarking, setEyeMarking] = useState('/assets/banner-layers/05_EyeMarkings/1.png');
  const [HeadWear, setHeadWear] = useState('/assets/banner-layers/06_Headwear/1.png');
  const [Outfit, setOutfit] = useState('/assets/banner-layers/07_Outfits/1.png');
  const [Eyes, setEyes] = useState('/assets/banner-layers/08_Eyes/1.png');

  //loaders
  const [loaderVis, setLoaderVis] = useState(false);
  const [reseting, setReseting] = useState(false);
  const [saving, setSaving] = useState(false);

  const resizeHandler = useCallback(() => {
    const screenX = window.innerWidth;
    document.documentElement.style.setProperty('--curr-font', FontSize + 'px');
    document.documentElement.style.setProperty('--curr-small-font', (FontSize * (screenX / 1000)) + 'px');
    document.documentElement.style.setProperty('--curr-big-font', (FontSize * 2) + 'px');
    console.log('hi')
  }, [])

  //set page title
  useEffect(() => {
    document.title = 'Early | Banner Tool'
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
    }, 3000);

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [resizeHandler])


  //different font size displays for small and big devices
  useEffect(() => {
    const screenX = window.innerWidth;
    document.documentElement.style.setProperty('--curr-font', FontSize + 'px');
    document.documentElement.style.setProperty('--curr-small-font', (FontSize * (screenX / 1000)) + 'px');
    document.documentElement.style.setProperty('--curr-big-font', (FontSize * 2) + 'px');

  }, [FontSize, resizeHandler]);



  // Function to handle attribute image click
  function handleAttributeClick(layerGroup: layerGroup, attribute: string) {
    switch (layerGroup.name) {
      case 'Backgrounds':
        if (BannerBackground !== attribute) {
          setBannerBackground(attribute);
          setLoaderVis(true);
        }
        break;
      case 'Background Items':
        if (BackgroundItem !== attribute) {
          setBackgroundItem(attribute);
          setLoaderVis(true);
        }
        break;
      case 'Skins':
        if (Skin !== attribute) {
          setSkin(attribute);
          setLoaderVis(true);
        }
        break;
      case 'Skulls':
        if (Skull !== attribute) {
          setSkull(attribute);
          setLoaderVis(true);
        }
        break;
      case 'EyeMarkings':
        if (EyeMarking !== attribute) {
          setEyeMarking(attribute);
          setLoaderVis(true);
        }
        break;
      case 'HeadWear':
        if (HeadWear !== attribute) {
          setHeadWear(attribute);
          setLoaderVis(true);
        }
        break;
      case 'Outfits':
        if (Outfit !== attribute) {
          setOutfit(attribute);
          setLoaderVis(true);
        }
        break;
      case 'Eyes':
        if (Eyes !== attribute) {
          setEyes(attribute);
          setLoaderVis(true);
        }
        break;
      default:
        setLoaderVis(false);
        // Handle unknown layer group name or do nothing
        break;
    }
  }

  // Function to get the current state value based on entry.name
  function getCurrentStateValue(entryName: string): string {
    switch (entryName) {
      case 'Backgrounds':
        return BannerBackground;
      case 'Background Items':
        return BackgroundItem;
      case 'Skins':
        return Skin;
      case 'Skulls':
        return Skull;
      case 'EyeMarkings':
        return EyeMarking;
      case 'HeadWear':
        return HeadWear;
      case 'Outfits':
        return Outfit;
      case 'Eyes':
        return Eyes;
      default:
        // Handle unknown entryName or return a default value
        return ''; // You can return a default value or handle it differently
    }
  }

  //reseting banner
  function resetLayerValuesToOriginal() {
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
    setReseting(true);

    setBannerBackground('/assets/banner-layers/01_Backgrounds/1.png');
    setBackgroundItem('/assets/banner-layers/02_BackgroundItems/1.png');
    setSkin('/assets/banner-layers/03_Skins/1.png');
    setSkull('/assets/banner-layers/04_Skulls/1.png');
    setEyeMarking('/assets/banner-layers/05_EyeMarkings/1.png');
    setHeadWear('/assets/banner-layers/06_Headwear/1.png');
    setOutfit('/assets/banner-layers/07_Outfits/1.png');
    setEyes('/assets/banner-layers/08_Eyes/1.png');
    setFontSize(25);
    setBannerText('');

    sleep(2000).then(() => {
      setReseting(false);
    });
  }

  function captureAndSaveBanner() {
    const hiddenBanner = document.querySelector('.hidden-banner') as HTMLDivElement; // Replace with the actual class or ID of your hidden banner container
    hiddenBanner.style.display = 'flex';
    window.scrollTo(0, 0);
    document.body.style.overflowY = 'hidden'

    if (hiddenBanner) {
      html2canvas(hiddenBanner).then((canvas) => {
        const image = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = image;
        downloadLink.download = 'banner.png';
        downloadLink.click();

        hiddenBanner.style.display = 'none'
        document.body.style.overflowY = 'auto'

        setSaving(false);
      });
    }
  }

  return (
    <div className='sm:mt-12 mt-2 mx-auto max-w-7xl h-screen'>
      <section className='sm:px-8 flex items-start justify-center flex-wrap w-full max-md:gap-8 gap-16'>

        {/**info section */}
        <div className='max-lg:text-center max-lg:items-center flex flex-col items-start justify-start gap-2'>
          <div className='text-4xl sm:text-5xl md:text-6xl font-semi-bold'>Automated <br /> Banner Tool</div>
          <div className='text-lg max-sm:text-[12px] font-semibold mt-10 opacity-80'>
            A great tool to rock some hidden <br /> Kanohi Art on your socials whenever <br /> you want.
          </div>

          <ul className='lg:ml-8 lg:list-disc text-sm max-sm:text-[12px] font-semibold mt-1 opacity-80'>
            <li className='' >Pick your attributes</li>
            <li className='' >Add some text</li>
            <li className='' >Adjust the size</li>
            <li className='' >Export and save</li>
          </ul>


          <Link
            target='_blank'
            href={TWITTER_URL}
            className='max-sm:hidden  mt-6 px-2 export cursor-pointer max-w-full h-10 rounded-2xl text-yellow-50 text-opacity-80 items-center flex justify-center text-center'
          >
            <p>Get this tool for your community</p>
          </Link>
        </div>


        {/**Banner editing section */}
        <div className=' flex flex-col items-center justify-start gap-2 w-[700px] mx-2'>

          {/**Banner Canvas */}
          <div className='overflow-hidden aspect-[3/1] w-[min(700px,80vw)] relative rounded-2xl'>
            <div className='w-full h-full relative overflow-hidden'>

              {/**change Loader */}
              <div
                style={{
                  display: loaderVis ? ('flex') : ('none')
                }}
                className='absolute z-[5] bg-black bg-opacity-100 w-full h-full items-center justify-center'>
                <Image

                  className=' animate-spin  aspect-auto'
                  width={60}
                  height={60}
                  alt='loader'
                  quality={100}
                  src={'/icons/loading.png'}>
                </Image>
              </div>

              {/**reset Loader */}
              <div
                style={{
                  opacity: reseting ? ('100%') : ('0')
                }}
                className='absolute flex z-[5] bg-black bg-opacity-100 w-full h-full items-center justify-center'>
                <Image
                  className=' animate-spin  aspect-auto'
                  width={60}
                  height={60}
                  alt='loader'
                  quality={100}
                  src={'/icons/loading.png'}>
                </Image>
              </div>

              {/**reset */}
              <Image
                onClick={resetLayerValuesToOriginal}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Reset Banner"
                data-tooltip-place="top"
                className={'z-[6] rounded-full bg-slate-700 p-1 bg-opacity-30 hover:scale-110 duration-100 cursor-pointer active:scale-100 absolute max-sm:scale-[0.75] max-sm:top-1 max-sm:right-1  right-4 top-4'}
                width={35} height={35} alt='reset' src={'/icons/reset.png'}>

              </Image>


              {/** banner text */}
              <div className='sm:[font-size:var(--curr-font)] max-sm:[font-size:var(--curr-small-font)] absolute z-[4] w-[57%] h-full right-[5%] mr-[4%] flex items-center justify-center'
              >
                <p
                  className=' duration-75 break-words w-full text-center text-yellow-50 road-rage mt-[5%]'
                >{bannerText === '' ? ('Your Text Here') : (bannerText)}</p>
              </div>


              {/**foreground avatar */}
              <div className='absolute w-[35%] h-full z-[3] left-[10%] bottom-0'>
                {
                  !shouldScale.has(BackgroundItem) ? (
                    <Image className='absolute top-0 left-0'
                      onLoadingComplete={() => {
                        setLoaderVis(false)
                      }} fill={true} alt='bgitem' src={BackgroundItem}></Image>

                  ) : (
                    <Image className='absolute top-0 left-0 scale-x-[3.0] transition-none translate-x-[2%]'
                      onLoadingComplete={() => {
                        setLoaderVis(false)
                      }} fill={true} alt='bgitem' src={BackgroundItem}></Image>
                  )
                }
                <Image className='absolute top-0 left-0'
                  onLoadingComplete={() => {
                    setLoaderVis(false)
                  }} fill={true} alt='skin' src={Skin}></Image>
                <Image className='absolute top-0 left-0'
                  onLoadingComplete={() => {
                    setLoaderVis(false)
                  }} fill={true} alt='skull' src={Skull}></Image>
                <Image className='absolute top-0 left-0'
                  onLoadingComplete={() => {
                    setLoaderVis(false)
                  }} fill={true} alt='eyemarking' src={EyeMarking}></Image>
                <Image className='absolute top-0 left-0'
                  onLoadingComplete={() => {
                    setLoaderVis(false)
                  }} fill={true} alt='HeadWear' src={HeadWear}></Image>
                <Image className='absolute top-0 left-0'
                  onLoadingComplete={() => {
                    setLoaderVis(false)
                  }} fill={true} alt='outfits' src={Outfit}></Image>

                {
                  !shouldScale.has(Eyes) ? (
                    <Image className='absolute top-0 left-0'
                      onLoadingComplete={() => {
                        setLoaderVis(false)
                      }} fill={true} alt='eyes' src={Eyes}></Image>

                  ) : (
                    <Image className='absolute top-0 left-0 scale-x-[3.0] transition-none translate-x-[2%]'
                      onLoadingComplete={() => {
                        setLoaderVis(false)
                      }} fill={true} alt='eyes' src={Eyes}></Image>
                  )
                }
              </div>


              {/**background dim */}
              <div className='z-[2] absolute bg-black opacity-[55%] top-0 left-0 w-full h-full'></div>


              {/**background avatar */}
              <div className='absolute w-[80%] aspect-square z-[1] right-[-8%] top-[-42%]'>
                {
                  !shouldScale.has(BackgroundItem) ? (
                    <Image className='absolute top-0 left-0'
                      onLoadingComplete={() => {
                        setLoaderVis(false)
                      }} fill={true} alt='bgitem' src={BackgroundItem}></Image>

                  ) : (
                    <Image className='absolute top-0 left-0 scale-x-[3.0] transition-none translate-x-[2%]'
                      onLoadingComplete={() => {
                        setLoaderVis(false)
                      }} fill={true} alt='bgitem' src={BackgroundItem}></Image>
                  )
                }
                <Image className='absolute top-0 left-0'
                  onLoadingComplete={() => {
                    setLoaderVis(false)
                  }} fill={true} alt='skin' src={Skin}></Image>
                <Image className='absolute top-0 left-0'
                  onLoadingComplete={() => {
                    setLoaderVis(false)
                  }} fill={true} alt='skull' src={Skull}></Image>
                <Image className='absolute top-0 left-0'
                  onLoadingComplete={() => {
                    setLoaderVis(false)
                  }} fill={true} alt='eyemarking' src={EyeMarking}></Image>
                <Image className='absolute top-0 left-0'
                  onLoadingComplete={() => {
                    setLoaderVis(false)
                  }} fill={true} alt='HeadWear' src={HeadWear}></Image>
                <Image className='absolute top-0 left-0'
                  onLoadingComplete={() => {
                    setLoaderVis(false)
                  }} fill={true} alt='outfits' src={Outfit}></Image>

                {
                  !shouldScale.has(Eyes) ? (
                    <Image className='absolute top-0 left-0'
                      onLoadingComplete={() => {
                        setLoaderVis(false)
                      }} fill={true} alt='eyes' src={Eyes}></Image>

                  ) : (
                    <Image className='absolute top-0 left-0 scale-x-[3.0] transition-none translate-x-[2%]'
                      onLoadingComplete={() => {
                        setLoaderVis(false)
                      }} fill={true} alt='eyes' src={Eyes}></Image>
                  )
                }
              </div>


              {/**background */}
              <Image
                onLoadingComplete={() => {
                  setLoaderVis(false)
                }}
                className='z-[0]' fill={true} alt='bg' src={BannerBackground}></Image>
            </div>

          </div>


          {/**attribute choice section */}
          <h1 className='text-lg font-semibold mt-6 opacity-80'>Choose Attributes</h1>

          <div className='hidden sm:flex wrap items-center justify-evenly gap-2 h-60 max-md:w-[500px] overflow-hidden  '>
            {layerGroups.map((entry, _) => (
              <div className='p-2 flex flex-col justify-start items-center gap-2 overflow-y-auto h-full' key={entry.name}>
                {entry.layers.map((layer, _) => (
                  <div key={layer}>
                    <Image
                      className={
                        (entry.name !== 'Backgrounds' ? (' transition-all aspect-auto rounded-full ') : (' aspect-square rounded-xl '))
                        + ' w-[60px] aspect-auto active:scale-90 hover:scale-[1.08] duration-75 cursor-pointer rounded-full hover:bg-slate-400 hover:bg-opacity-20 '}
                      style={{
                        boxShadow: getCurrentStateValue(entry.name) === layer ? ('0px 0px 8px 1px rgb(107, 3, 107)') : 'none',
                        background: getCurrentStateValue(entry.name) === layer ? ('rgba(100, 100, 100, 0.295)') : 'none',
                        padding: shouldScale.has(layer) ? ('1.20rem 0') : ('0')
                      }}
                      loading='eager'
                      width={60}
                      height={60}
                      alt='layer'
                      quality={50}
                      src={layer}

                      priority={true}
                      onClick={() => {
                        if (!loaderVis) {
                          handleAttributeClick(entry, layer)
                        }
                      }}
                    ></Image>
                  </div>
                ))}
              </div>
            ))}
          </div>


          {/**on small screens */}
          <div className='sm:hidden my-8 flex wrap items-center justify-center gap-4 h-60 max-md:w-[500px] overflow-hidden  '>
            {layerGroups.slice(0, 3).map((entry, _) => (
              <div className='p-2 flex flex-col justify-start items-center gap-2 overflow-y-auto h-full' key={entry.name}>
                {entry.layers.map((layer, _) => (
                  <div key={layer}>
                    <Image className={(entry.name !== 'Backgrounds' ? (' transition-all aspect-auto rounded-full') : ('aspect-square rounded-xl'))
                      + ' w-[60px] aspect-auto active:scale-90 hover:scale-[1.08] duration-75 cursor-pointer rounded-full hover:bg-slate-400 hover:bg-opacity-20 '}
                      style={{
                        boxShadow: getCurrentStateValue(entry.name) === layer ? ('0px 0px 8px 1px rgb(107, 3, 107)') : 'none',
                        background: getCurrentStateValue(entry.name) === layer ? ('rgba(100, 100, 100, 0.295)') : 'none'
                      }}
                      loading='eager'
                      width={60}
                      height={60}
                      alt='layer'
                      quality={50}
                      src={layer}

                      priority={true}
                      onClick={() => {
                        if (!loaderVis) {
                          handleAttributeClick(entry, layer)
                        }
                      }}
                    ></Image>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className='sm:hidden my-8 flex wrap items-center justify-center gap-4 h-60 max-md:w-[500px] overflow-hidden  '>
            {layerGroups.slice(3, 5).map((entry, _) => (
              <div className='p-2 flex flex-col justify-start items-center gap-2 overflow-y-auto h-full' key={entry.name}>
                {entry.layers.map((layer, _) => (
                  <div key={layer}>
                    <Image className={(entry.name !== 'Backgrounds' ? (' transition-all aspect-auto rounded-full') : ('aspect-square rounded-xl'))
                      + ' w-[60px] aspect-auto active:scale-90 hover:scale-[1.08] duration-75 cursor-pointer rounded-full hover:bg-slate-400 hover:bg-opacity-20 '}
                      style={{
                        boxShadow: getCurrentStateValue(entry.name) === layer ? ('0px 0px 8px 1px rgb(107, 3, 107)') : 'none',
                        background: getCurrentStateValue(entry.name) === layer ? ('rgba(100, 100, 100, 0.295)') : 'none'
                      }}
                      loading='eager'
                      width={60}
                      height={60}
                      alt='layer'
                      quality={50}
                      src={layer}

                      priority={true}
                      onClick={() => {
                        if (!loaderVis) {
                          handleAttributeClick(entry, layer)
                        }
                      }}
                    ></Image>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className='sm:hidden my-8 flex wrap items-center justify-center gap-4 h-60 max-md:w-[500px] overflow-hidden  '>
            {layerGroups.slice(5, 7).map((entry, _) => (
              <div className='p-2 flex flex-col justify-start items-center gap-2 overflow-y-auto h-full' key={entry.name}>
                {entry.layers.map((layer, _) => (
                  <div key={layer}>
                    <Image className={(entry.name !== 'Backgrounds' ? (' transition-all aspect-auto rounded-full') : ('aspect-square rounded-xl'))
                      + ' w-[60px] aspect-auto active:scale-90 hover:scale-[1.08] duration-75 cursor-pointer rounded-full hover:bg-slate-400 hover:bg-opacity-20 '}
                      style={{
                        boxShadow: getCurrentStateValue(entry.name) === layer ? ('0px 0px 8px 1px rgb(107, 3, 107)') : 'none',
                        background: getCurrentStateValue(entry.name) === layer ? ('rgba(100, 100, 100, 0.295)') : 'none'
                      }}
                      loading='eager'
                      width={60}
                      height={60}
                      alt='layer'
                      quality={50}
                      src={layer}

                      priority={true}
                      onClick={() => {
                        if (!loaderVis) {
                          handleAttributeClick(entry, layer)
                        }
                      }}
                    ></Image>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/**Text and Font Sizes */}
          <div className='px-2 flex max-sm:flex-col items-start max-sm:items-center justify-between w-full'>
            {/**Text Inpout Section */}
            <div className='flex flex-col items-center gap-2 w-[70%]'>
              <label className='text-lg font-semibold mt-6 opacity-80'>Add Text</label>
              <input
                className=' bg-yellow-50 h-10 rounded-xl text-center text-black text-sm w-full'
                type="text"
                id="bannerText"
                placeholder='Type Here..'
                value={bannerText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setBannerText((e.target.value).substring(0, 20));
                }}
              />

            </div>
            {/**Font Size section */}
            <div className='flex flex-col items-center gap-2 w-[27%] max-sm:w-[50vw]'>
              <label className='text-lg font-semibold mt-6 opacity-80'>Adjust Font Size</label>
              <input
                className='text-slider w-full h-[14px] appearance-none bg-stone-100 bg-opacity-50 rounded-lg cursor-pointer'
                type="range"
                id="textSize"
                min={25}
                max={78}
                value={FontSize}
                onChange={
                  (e: React.ChangeEvent<HTMLInputElement>) => {
                    setFontSize(Number(e.target.value));
                  }
                }
              />
              <div className='-mt-1 flex justify-between items-center w-full'>
                <p className='road-rage text-sm'>AA</p>
                <p className='road-rage text-xl'>AA</p>
              </div>
            </div>
          </div>

          {/**save banner section */}
          <div
            className='mt-3 sm:mb-24 mx-2 export cursor-pointer w-[98%] max-sm:w-[95vw] h-10 rounded-xl text-yellow-50 text-opacity-80 items-center flex justify-center text-center'
            onClick={() => {
              if (!loaderVis) {
                setSaving(true)
                setTimeout(() => {
                  captureAndSaveBanner();
                }, 10);
              }
            }}
          >
            <p>Export and Save</p>
          </div>

          <Link
            target='_blank'
            href={TWITTER_URL}
            className='sm:hidden mt-3 mb-24 export cursor-pointer w-[98%] max-sm:w-[95vw] h-10 rounded-xl text-yellow-50 text-opacity-80 items-center flex justify-center text-center'
          >
            <p>Get this tool for your community</p>
          </Link>
        </div>

        {/**Hidden Canvas */}
        <div className='hidden-banner hidden'>
          <div className='overflow-hidden aspect-[3/1] w-[1500px] relative'>
            {/** banner text */}
            <div className='[font-size:var(--curr-big-font)] absolute z-[4] w-[50%] h-full right-0 mr-[5%] flex items-center justify-center'
            >
              <p
                className=' duration-75 break-words w-full text-center text-yellow-50 road-rage mt-[5%]'
              >{bannerText === '' ? ('Your Text Here') : (bannerText)}</p>
            </div>

            {/**foreground avatar */}
            <div className='absolute w-[35%] h-full z-[3] left-[10%] bottom-0'>
              {
                !shouldScale.has(BackgroundItem) ? (
                  <Image className='absolute top-0 left-0'
                    onLoadingComplete={() => {
                      setLoaderVis(false)
                    }} fill={true} alt='bgitem' src={BackgroundItem}></Image>

                ) : (
                  <Image className='absolute top-0 left-0 scale-x-[3.0] transition-none translate-x-[2%]'
                    onLoadingComplete={() => {
                      setLoaderVis(false)
                    }} fill={true} alt='bgitem' src={BackgroundItem}></Image>
                )
              }
              <Image className='absolute top-0 left-0'
                onLoadingComplete={() => {
                  setLoaderVis(false)
                }} fill={true} alt='skin' src={Skin}></Image>
              <Image className='absolute top-0 left-0'
                onLoadingComplete={() => {
                  setLoaderVis(false)
                }} fill={true} alt='skull' src={Skull}></Image>
              <Image className='absolute top-0 left-0'
                onLoadingComplete={() => {
                  setLoaderVis(false)
                }} fill={true} alt='eyemarking' src={EyeMarking}></Image>
              <Image className='absolute top-0 left-0'
                onLoadingComplete={() => {
                  setLoaderVis(false)
                }} fill={true} alt='HeadWear' src={HeadWear}></Image>
              <Image className='absolute top-0 left-0'
                onLoadingComplete={() => {
                  setLoaderVis(false)
                }} fill={true} alt='outfits' src={Outfit}></Image>

              {
                !shouldScale.has(Eyes) ? (
                  <Image className='absolute top-0 left-0'
                    onLoadingComplete={() => {
                      setLoaderVis(false)
                    }} fill={true} alt='eyes' src={Eyes}></Image>

                ) : (
                  <Image className='absolute top-0 left-0 scale-x-[3.0] transition-none translate-x-[2%]'
                    onLoadingComplete={() => {
                      setLoaderVis(false)
                    }} fill={true} alt='eyes' src={Eyes}></Image>
                )
              }
            </div>


            {/**background dim */}
            <div className='z-[2] absolute bg-black opacity-[55%] top-0 left-0 w-full h-full'></div>


            {/**background avatar */}
            <div className='absolute w-[80%] aspect-square z-[1] right-[-8%] top-[-42%]'>
              {
                !shouldScale.has(BackgroundItem) ? (
                  <Image className='absolute top-0 left-0'
                    onLoadingComplete={() => {
                      setLoaderVis(false)
                    }} fill={true} alt='bgitem' src={BackgroundItem}></Image>

                ) : (
                  <Image className='absolute top-0 left-0 scale-x-[3.0] transition-none translate-x-[2%]'
                    onLoadingComplete={() => {
                      setLoaderVis(false)
                    }} fill={true} alt='bgitem' src={BackgroundItem}></Image>
                )
              }
              <Image className='absolute top-0 left-0'
                onLoadingComplete={() => {
                  setLoaderVis(false)
                }} fill={true} alt='skin' src={Skin}></Image>
              <Image className='absolute top-0 left-0'
                onLoadingComplete={() => {
                  setLoaderVis(false)
                }} fill={true} alt='skull' src={Skull}></Image>
              <Image className='absolute top-0 left-0'
                onLoadingComplete={() => {
                  setLoaderVis(false)
                }} fill={true} alt='eyemarking' src={EyeMarking}></Image>
              <Image className='absolute top-0 left-0'
                onLoadingComplete={() => {
                  setLoaderVis(false)
                }} fill={true} alt='HeadWear' src={HeadWear}></Image>
              <Image className='absolute top-0 left-0'
                onLoadingComplete={() => {
                  setLoaderVis(false)
                }} fill={true} alt='outfits' src={Outfit}></Image>

              {
                !shouldScale.has(Eyes) ? (
                  <Image className='absolute top-0 left-0'
                    onLoadingComplete={() => {
                      setLoaderVis(false)
                    }} fill={true} alt='eyes' src={Eyes}></Image>

                ) : (
                  <Image className='absolute top-0 left-0 scale-x-[3.0] transition-none translate-x-[2%]'
                    onLoadingComplete={() => {
                      setLoaderVis(false)
                    }} fill={true} alt='eyes' src={Eyes}></Image>
                )
              }
            </div>


            {/**background */}
            <Image
              onLoadingComplete={() => {
                setLoaderVis(false)
              }}
              className='z-[0]' fill={true} alt='bg' src={BannerBackground}></Image>

          </div>
        </div>

      </section >
      <Tooltip className='z-10' id="my-tooltip" />

      {
        saving && (
          <div className='z-30 flex items-center justify-center fixed w-screen h-screen bg-black bg-opacity-90 top-0 left-0'>
            <Image
              className='animate-spin aspect-auto'
              width={75}
              height={75}
              alt='loader'
              quality={100}
              priority={true}
              loading='eager'
              src={'/icons/loading.png'}>
            </Image>
          </div>
        )
      }
    </div >
  )
}

export default Home