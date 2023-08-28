import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react'

export default function Experience ()
{
    const [width, setWidth] = useState(window.innerWidth)

    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    })

    return (
    <>
        <Environment preset='city'/>

        <color args={["#695b5b"]} attach="background"/>

        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{mass: 2, tention:400}}
            snap={{mass: 4, tention:400}}
        >
            <Float 
                floatIntensity={0.4}
                scale={
                    width < 375 ? 
                    0.4 : 
                    width < 640 ?
                    0.6 : 1
                }
            >
                <rectAreaLight 
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#008F8A' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />

                <primitive 
                    object={computer.scene}
                    position-y={-1.2}
                >
                    <Html
                        transform
                        wrapperClass='htmlScreen'
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, - 1.4 ] }
                        rotation-x={ - 0.256 }
                    >
                        <iframe src='https://html-portfolio-rose.vercel.app/'/>
                    </Html>
                </primitive>

                <Text
                    font='./bangers-v20-latin-regular.woff'
                    fontSize={ 0.5 }
                    position={ [ 2, 0.75, 0 ] }
                    rotation-y={ - 1.25 }
                    maxWidth={ 2 }
                >
                    Yustina Yasin
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={-1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />
    </>
    )
}