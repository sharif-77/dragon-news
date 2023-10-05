import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Categories = () => {
    const {id}=useParams()
    const [allData,setAllData]=useState([])
    const [currentCategoryData,setCurrentCategoryData]=useState([])

    useEffect(()=>{
        fetch('/news.json')
        .then(res=>res.json())
        .then(data=>setAllData(data))
        const categoryIdData= allData.filter(data=>data.category_id==id)
        setCurrentCategoryData(categoryIdData)
        
        
       
    },[allData.length,id])


    // useEffect(()=>{
    //     const categoryIdData= allData.filter(data=>data.category_id==id)
    //    setCurrentCategoryData(categoryIdData)
    // },[])

    console.log(allData,currentCategoryData);
    return (
        <div>
            <p>categories {id}</p>
            <p> {currentCategoryData.length}</p>
        </div>
    );
};

export default Categories;