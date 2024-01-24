import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GUI from 'lil-gui';
import gsap from 'gsap';

const ThreeBox = () => {
    const canvasRef = useRef();

    useEffect(() => {
        // Initialisation de Three.js
        const canvas = canvasRef.current;
        const scene = new THREE.Scene();

        const parameters = {
            materialColor: '#ffeded'

        }

        const cursor = {}
        cursor.x = 0
        cursor.y = 0


        /**
         * Test cube
         */
        
        const textureloader = new THREE.TextureLoader()
        
        const gradienttexture = textureloader.load('textures/3.jpg')
        gradienttexture.magFilter = THREE.NearestFilter
        
        const material = new THREE.MeshToonMaterial({
            color : parameters.materialColor,
            gradientMap : gradienttexture
        })
        
        
        const mesh1 = new THREE.Mesh(
            new THREE.TorusGeometry(1, 0.4, 16, 60),
            material
        )
        
        const mesh2 = new THREE.Mesh(
            new THREE.ConeGeometry(1, 2, 32),
            material
        )
        
        const mesh3 = new THREE.Mesh(
            new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
            material
        )
        
        const objectdistance = 4
        
        mesh1.position.y = - objectdistance * 0
        mesh2.position.y = - objectdistance * 1
        mesh3.position.y = - objectdistance * 2
        
        mesh1.position.x = 2
        mesh2.position.x = - 2
        mesh3.position.x = 2
        
        
        scene.add(mesh1,mesh2,mesh3)
        const sectionsMeshes = [mesh1, mesh2, mesh3]
        
        const particlecount = 1000
        
        const positions = new Float32Array(particlecount * 3)
        
        for (let i = 0; i < particlecount; i++) {
            positions[i * 3 + 0] = (Math.random() - 0.5) * 10
            positions[i * 3 + 1] = objectdistance * 0.5 - Math.random() * objectdistance * sectionsMeshes.length
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10
            
        }
        
        const particleGeometry = new THREE.BufferGeometry()
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        
        const particleMaterial = new THREE.PointsMaterial({
            color : parameters.materialColor,
            sizeAttenuation: true,
            size: 0.03
        })
        
        const particle = new THREE.Points(particleGeometry,particleMaterial)
        scene.add(particle)
        
        
        const light = new THREE.DirectionalLight('#ffffff', 3)
        light.position.set(1,1,0)
        scene.add(light)
        /**
         * Sizes
         */
        console.log(canvas);
        const sizes = {
            width: canvas.width,
            height: canvas.height
        }

        const cameragroup = new THREE.Group()
        scene.add(cameragroup)

        const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
        camera.position.z = 6
        cameragroup.add(camera)



        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))



        let scrollY = 0

        function onScroll() {

            const containerTop = canvas.getBoundingClientRect().top + 1000;
            const containerHeight = canvas.getBoundingClientRect().height + 1000;
            const windowHeight = window.innerHeight;
            console.log(containerTop, containerHeight);
        
            if (containerTop <= windowHeight  && containerTop >= -containerHeight) {
                // Calculez la nouvelle position de la caméra en fonction du défilement
                const scrollFraction = (windowHeight - containerTop) / (windowHeight + containerHeight);
                scrollY = scrollFraction * 30 // Calculez en fonction de scrollFraction
                console.log(scrollY);
        
            }
        }

        window.addEventListener('scroll', onScroll);

        

        let currentSection = 0

        // Animation (tick function)
       const clock = new THREE.Clock()
        let previoustime = 0
        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()
            const deltatime = elapsedTime - previoustime
            previoustime = elapsedTime

            camera.position.y = - scrollY

            const paralaxX = cursor.x * 1
            const paralaxY = - cursor.y * 1


            cameragroup.position.x += (paralaxX - cameragroup.position.x) * 5 * deltatime
            cameragroup.position.y += (paralaxY - cameragroup.position.y) * 5 * deltatime

            for(const mesh of sectionsMeshes){
                mesh.rotation.x += deltatime * 0.1
                mesh.rotation.y += deltatime * 0.12

            }

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()

        // Nettoyage
        return () => {


        };
    }, []);

    return(
        <div>
            <canvas ref={canvasRef} className="webgl"></canvas>;
            <section className="section">
                <h1>My Portfolio</h1>
            </section>
            <section className="section">
                <h2>My projects</h2>

            </section>
            <section className="section">
                <h2>Contact me</h2>
            </section>
        </div>
        )
};

export default ThreeBox;
