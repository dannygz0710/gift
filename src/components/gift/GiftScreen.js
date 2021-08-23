import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";






export const GiftScreen = ({defaultCategories = []}) => {

  const [categories, setCategories] = useState( defaultCategories );

  return (
    <>
    
      <AddCategory
      setCategories={setCategories}
      />
    
    
      
        {categories.map((category =>
            <GifGrid
             key={category}
             category={category}
           />
        ))}
      
    </>
  );
};
