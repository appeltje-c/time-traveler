import { useGLTF, useTexture, PivotControls, OrbitControls, TransformControls, PresentationControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useRef } from "react"
import { Mesh } from "three"
import { GLTF } from "three-stdlib"


type GLTFResult = GLTF & {
    nodes: {
        Baked: Mesh,
        Light: Mesh,
        Light001: Mesh,
        Light002: Mesh,
        Screen001: Mesh,
        Screen002: Mesh,
        Paper: Mesh,
        Base: Mesh,
        Handle: Mesh
    }
    materials: {}
}

export default function OfficeImperialTobacco() {

    const { nodes } = useGLTF('./model/model.glb') as GLTFResult
    const texture = useTexture('./model/baked.jpg')
    texture.flipY = false

    const { rotation, polar, azimuth } = useControls({
        rotation: {
            value: [0.4, -1, 0],
            step: 0.1
        },
        polar: {
            value: [-0.4, 0.2],
            step: 0.1
        },
        azimuth: {
            value: [-1.0, 1.0],
            step: 0.1
        }
    })

    return (
        <>
            <color attach="background" args={['#1f1f1f']} />


            <PresentationControls
                global
                rotation={rotation}
                polar={polar}
                azimuth={azimuth}
                snap={{ mass: 4, tension: 400 }}
                config={{ mass: 1, tension: 400 }}
            >

                <group scale={1.2}>
                    <mesh
                        geometry={nodes.Light.geometry}
                        position={[-0.835, 0.336, -1.819]}>
                        <meshBasicMaterial color={0xffffff} />
                    </mesh>

                    <mesh
                        geometry={nodes.Light001.geometry}
                        position={[0.725, 0.336, -1.819]}>
                        <meshBasicMaterial color={0xffffff} />
                    </mesh>

                    <mesh
                        geometry={nodes.Light002.geometry}
                        position={[0.909, 0.336, 0.077]}
                        rotation={[0, -Math.PI / 2, 0]}>
                        <meshBasicMaterial color={0xffffff} />
                    </mesh>

                    <mesh
                        geometry={nodes.Screen001.geometry}
                        material={nodes.Screen001.material}
                        position={[0.514, 1.27, -1.156]}
                        rotation={[0, -0.783, 0]}
                    />
                    <mesh
                        geometry={nodes.Screen002.geometry}
                        material={nodes.Screen002.material}
                        position={[-0.531, 1.27, -1.404]}
                        rotation={[Math.PI, -0.573, Math.PI]}
                    />
                    <mesh
                        geometry={nodes.Baked.geometry}
                        position={[1.261, 0.378, -1.096]}
                        rotation={[0, 0.683, 0]}>
                        <meshBasicMaterial map={texture} />
                    </mesh>

                    <mesh
                        geometry={nodes.Paper.geometry}
                        position={[-0.353, 1.185, 0.423]}
                        rotation={[0.41, 0, 0]}>
                    </mesh>

                    <mesh
                        name="Base"
                        geometry={nodes.Base.geometry}
                        position={[-1.641, 1.217, 0.545]}
                        rotation={[Math.PI, -1.126, Math.PI]}
                        scale={0.904}>
                        <meshBasicMaterial map={texture} />
                    </mesh>
                    <mesh
                        name="Handle"
                        geometry={nodes.Handle.geometry}
                        position={[-1.812, 1.275, 0.903]}
                        rotation={[Math.PI, -1.126, Math.PI]}
                        scale={0.904}>
                        <meshBasicMaterial map={texture} />
                    </mesh>
                </group>

            </PresentationControls>
        </>
    )
}