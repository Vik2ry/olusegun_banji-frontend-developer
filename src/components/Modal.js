import React, { useEffect, useState } from 'react';
import { Loading } from "./Loading"
import axios from "axios";

function Modal({ rocketId, closeModal }) {
    const [value, setValue] = useState(0)
    const [imperial, setImperial] = useState(false);
    const [rocket, setRocket] = useState(null);

    useEffect(() => {
        const fetchRocket = async () => {
            try {
                const response = await axios.get(`https://api.spacexdata.com/v4/rockets/${rocketId}`);
                setRocket(response.data);
            } catch (error) {
                console.error('Error fetching rocket:', error);
            }
        };

        fetchRocket();
    }, [rocketId]);

    return (
        <>
            {!rocket ? (
                <Loading />
            ) : (

                <section >
                    <article>
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">

                            <div className="bg-white rounded-lg p-8 max-w-md overflow-y-auto max-h-[80vh]">

                                <h1 className="heading">{rocket.name}</h1>

                                <h2 className="capitalize text-3xl opacity-75 mt-2 text-black font-bold">
                                    Type: {rocket.type}
                                </h2>
                                <h2 className="text-3xl opacity-75 mt-2 text-black font-bold mb-8">
                                    First Flight Date: {rocket.first_flight}
                                </h2>

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 text-black opacity-75">
                                    <ul>
                                        <li>
                                            Cost per launch:{" "}
                                            {rocket.cost_per_launch.toLocaleString()} USD
                                        </li>
                                        <li>Company: {rocket.company}</li>
                                        <li>Success Rate: {rocket.success_rate_pct}%</li>
                                        {rocket.active ? (
                                            <li className="text-emerald-500">Active</li>
                                        ) : (
                                            <li className="text-rose-500">Inactive</li>
                                        )}
                                    </ul>

                                    <ul>
                                        <li>Country: {rocket.country}</li>
                                        <li>Stages: {rocket.stages}</li>
                                        {!imperial && (
                                            <>
                                                <li>Height: {rocket.height.meters}m</li>
                                                <li>Diameter: {rocket.diameter.meters}m</li>
                                                <li>Mass: {rocket.mass.kg.toLocaleString()}kg</li>
                                            </>
                                        )}

                                        {imperial && (
                                            <>
                                                <li>Height: {rocket.height.feet}ft</li>
                                                <li>Diameter: {rocket.diameter.feet}ft</li>
                                                <li>Mass: {rocket.mass.lb.toLocaleString()}lb</li>
                                            </>
                                        )}
                                    </ul>
                                </div>

                                <p className="text-black opacity-75 mt-5">
                                    {rocket.description}
                                </p>

                                <ul className="flex items-center justify-start gap-3 mt-5 mb-2">
                                    <li>
                                        <a
                                            href={rocket.wikipedia}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn"
                                        >
                                            Wikipedia
                                        </a>
                                    </li>
                                    <li>
                                        <button onClick={() => setImperial(!imperial)} className="btn">
                                            {imperial ? "Toggle Metric Units" : "Toggle Imperial Units"}
                                        </button>
                                    </li>
                                    <li>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={closeModal}>
                                            Close
                                        </button>
                                    </li>
                                </ul>
                                <img
                                    src={rocket.flickr_images[value]}
                                    alt={rocket.name}
                                    className="h-full object-cover"
                                />

                                <ul className="flex flex-wrap items-center justify-start gap-3 mt-5">
                                    {rocket.flickr_images.map((image, index) => (
                                        <li
                                            key={index}
                                            onClick={() => setValue(index)}
                                            className={`cursor-pointer bg-white ${index === value && "p-1"
                                                }`}
                                        >
                                            <img src={image} alt={rocket.name} className="w-20" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </article>
                </section>

            )
            }
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={closeModal}>
                Close
            </button>
        </>

    );
}

export default Modal;

