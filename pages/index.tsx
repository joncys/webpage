import '@fontsource/dm-mono'

import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Home: NextPage = () => {
  const mountRef = React.useRef(false)
  React.useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true
      console.log('Hey there! :)')
    }
  }, [mountRef])
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundColor: '#1E212A',
      }}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: '<!-- This code is great, I know -->',
        }}
      />
      <Head>
        <title>Simonas Jončys &mdash; I do creative stuff</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col gap-1 font-mono text-base p-12">
        <div className="flex flex-row h-full items-center">
          <Image src="/sj.png" alt="Photo of me" width="56" height="56" />
          <div className="flex flex-col ml-6">
            <div className="text-exta">
              &#47;&#47; hey there, my name is Simonas Jončys
            </div>
            <div className="text-exta">
              &#47;&#47; this webpage might be under &quot;permanent
              construction&quot;
            </div>
          </div>
        </div>
        <div>&nbsp;</div>
        <div>
          <span className="text-keyword">build</span>
          <span className="text-exta">(</span>
          <a
            href="https://algori.ai"
            target="_blank"
            rel="noreferrer"
            className="bg-algori text-black"
          >
            &apos;algori&apos;
          </a>
          <span className="text-exta">)</span>
        </div>
        <div>&nbsp;</div>
        <div>
          <span className="text-keyword">create</span>
          <span className="text-exta">(</span>
          <a
            href="https://atokaita.bandcamp.com/album/atokaita2001"
            target="_blank"
            rel="noreferrer"
            className="bg-atokaita text-white"
          >
            &apos;ATOKAITA2001&apos;
          </a>
          <span className="text-exta">,&nbsp;</span>
          <a
            href="https://30smtnakwrd.bandcamp.com/releases"
            target="_blank"
            rel="noreferrer"
            className="bg-30smtnakwrd text-white"
          >
            &apos;30SMTNAKWRD&apos;
          </a>
          <span className="text-exta">)</span>
        </div>
        <div>&nbsp;</div>
        <div>
          <span className="text-keyword">practice</span>
          <span className="text-exta">(</span>
          <span className="text-string">&apos;Card magic&apos;</span>
          <span className="text-exta">,&nbsp;</span>
          <span className="text-string">&apos;Drums&apos;</span>
          <span className="text-exta">,&nbsp;</span>
          <span className="text-string">&apos;Generative Art&apos;</span>
          <span className="text-exta">)</span>
        </div>
        <div>&nbsp;</div>
        <div>
          <span className="text-keyword">social</span>
          <span className="text-exta">(</span>
          <a
            href="https://www.linkedin.com/in/joncys/"
            target="_blank"
            rel="noreferrer"
            className="bg-linkedin text-white"
          >
            &apos;LinkedIn&apos;
          </a>
          <span className="text-exta">,&nbsp;</span>
          <a
            href="https://github.com/joncys"
            target="_blank"
            rel="noreferrer"
            className="bg-github text-white"
          >
            &apos;GitHub&apos;
          </a>
          <span className="text-exta">,&nbsp;</span>
          <a
            href="https://twitter.com/joncys"
            target="_blank"
            rel="noreferrer"
            className="bg-twitter text-white"
          >
            &apos;Twitter&apos;
          </a>
          <span className="text-exta">)</span>
        </div>
      </div>
    </div>
  )
}

export default Home
