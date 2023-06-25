import { useState } from "react";

export default function useModal(values){
    const [isModalOpen, setIsModalOpen]= useState(values);
    
    const toggleModal = () =>{
        setIsModalOpen(!isModalOpen);
    }
    return[isModalOpen,toggleModal];
} 