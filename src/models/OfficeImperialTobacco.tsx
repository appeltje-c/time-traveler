import { useGLTF, useTexture } from "@react-three/drei"
import { Mesh } from "three"
import { GLTF } from "three-stdlib"


type GLTFResult = GLTF & {
    nodes: {
        Baked: Mesh,
        Light: Mesh,
        Light001: Mesh,
        Light002: Mesh,
        Screen001: Mesh,
        Screen002: Mesh
    }
    materials: {}
}

export default function OfficeImperialTobacco() {

    const { nodes } = useGLTF('./model/model.glb') as GLTFResult
    const texture = useTexture('./model/baked.jpg')
    texture.flipY = false

    return (
        <>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Light.geometry}
                material={nodes.Light.material}
                position={[-0.835, 0.336, -1.819]}>
                <meshBasicMaterial color={0xffffff} />
            </mesh>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Light001.geometry}
                material={nodes.Light001.material}
                position={[0.725, 0.336, -1.819]}>
                <meshBasicMaterial color={0xffffff} />
            </mesh>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Light002.geometry}
                material={nodes.Light002.material}
                position={[0.909, 0.336, 0.077]}
                rotation={[0, -Math.PI / 2, 0]}>
                <meshBasicMaterial color={0xffffff} />
            </mesh>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Screen001.geometry}
                material={nodes.Screen001.material}
                position={[0.514, 1.27, -1.156]}
                rotation={[0, -0.783, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Screen002.geometry}
                material={nodes.Screen002.material}
                position={[-0.531, 1.27, -1.404]}
                rotation={[Math.PI, -0.573, Math.PI]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Baked.geometry}
                material={nodes.Baked.material}
                position={[1.261, 0.378, -1.096]}
                rotation={[0, 0.683, 0]}>
                <meshBasicMaterial map={texture} />
            </mesh>
        </>
    )
}