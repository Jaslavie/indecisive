import FilterItem from '../components/FilterItem.jsx'
import HoverTooltip from '../components/tooltip.jsx'
function Filter() {
    return (
        <>
            <div className="filter-head-contain">
                <h3>Select some filters*</h3>
                <HoverTooltip/> 
            </div>
            
            <div className="filters-contain">
                <FilterItem 
                 text = "Surprise Me"
                 icon = "fa-solid fa-face-surprise"
                />  
                <FilterItem 
                 text = "Fancy"
                 icon = "fa-solid fa-gem"
                />  
                <FilterItem 
                 text = "Vegetarian"
                 icon = "fa-solid fa-leaf"
                />  
                <FilterItem 
                 text = "Fast Food"
                 icon = "fa-solid fa-person-running"
                />  
                <FilterItem 
                 text = "Coffee/Boba Shops"
                 icon = "fa-solid fa-mug-saucer"
                />  
                <FilterItem 
                 text = "Study Spot"
                 icon = "fa-solid fa-book"
                />  
                
                
                
                
                
            </div>
           
            
        </>
    )
}

export default Filter