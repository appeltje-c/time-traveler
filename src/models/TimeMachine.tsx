import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        Portal: Mesh
        Support: Mesh
        Claw: Mesh
        Support001: Mesh
        Claw001: Mesh
        Plane002: Mesh
        Cube: Mesh
        NurbsPath: Mesh
        NurbsPath001: Mesh
        Plane001: Mesh
        Plane003: Mesh
        Plane004: Mesh
        Cube001: Mesh
        Cylinder: Mesh
        Cylinder001: Mesh
        Cylinder002: Mesh
        Cube002: Mesh
        Cube003: Mesh
        Cube004: Mesh
    }
    materials: {}
}

export default function TimeMachine(props: JSX.IntrinsicElements['group']) {

    const { nodes } = useGLTF('/time-machine.glb') as GLTFResult

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Portal.geometry}
                material={nodes.Portal.material}
                position={[1.367, 0.222, -0.093]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Support.geometry}
                material={nodes.Support.material}
                position={[1.371, 0, -0.852]}
                scale={[0.731, 1, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Claw.geometry}
                material={nodes.Claw.material}
                position={[1.37, 1.255, -0.626]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Support001.geometry}
                material={nodes.Support001.material}
                position={[1.371, 0, 0.542]}
                scale={[0.731, 1, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Claw001.geometry}
                material={nodes.Claw001.material}
                position={[1.37, 1.255, 0.413]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane002.geometry}
                material={nodes.Plane002.material}
                position={[1.091, 0.416, -0.149]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={nodes.Cube.material}
                position={[0.904, 0.37, -0.45]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.NurbsPath.geometry}
                material={nodes.NurbsPath.material}
                position={[1.343, 1.182, -0.749]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.NurbsPath001.geometry}
                material={nodes.NurbsPath001.material}
                position={[1.336, 1.219, -0.671]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane001.geometry}
                material={nodes.Plane001.material}
                position={[0.637, 0.357, -0.149]}
                rotation={[0, 0, 0.266]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane003.geometry}
                material={nodes.Plane003.material}
                position={[0.19, 0.235, -0.149]}
                rotation={[0, 0, 0.266]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane004.geometry}
                material={nodes.Plane004.material}
                position={[-0.256, 0.114, -0.149]}
                rotation={[0, 0, 0.266]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={nodes.Cube001.material}
                position={[0.996, 0, 1.258]}
                rotation={[0, -0.541, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={nodes.Cylinder.material}
                position={[0.699, 0.154, 1.376]}
                rotation={[0, 0, 0.355]}
                scale={[1.371, 1.009, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001.geometry}
                material={nodes.Cylinder001.material}
                position={[0.831, 0.201, 1.336]}
                rotation={[0, 0, 0.355]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002.geometry}
                material={nodes.Cylinder002.material}
                position={[1.33, 0, 1.127]}
                scale={1.217}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002.geometry}
                material={nodes.Cube002.material}
                position={[0.196, 0, -1.238]}
                rotation={[0, -0.53, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003.geometry}
                material={nodes.Cube003.material}
                position={[0.208, 0.021, -1.2]}
                rotation={[0, -0.53, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004.geometry}
                material={nodes.Cube004.material}
                position={[0.464, 0.021, -1.422]}
                rotation={[0.011, 0.241, -0.045]}
            />
        </group>
    )
}

useGLTF.preload('/time-machine.glb')
