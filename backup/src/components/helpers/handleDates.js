export const handleDate = ( lastUpdate ) =>{
    const justNow = new Date();
    const lastUpdateConverted = new Date( lastUpdate );

    const result = justNow - lastUpdateConverted;

    const resultInMinutes = parseInt(result/60000);
    const resultInHours = parseInt(resultInMinutes/60);
    const resultInDays = parseInt(resultInHours/24);
    const resultInMonths = parseInt(resultInDays/30);
    const resultInYears = parseInt(resultInMonths / 12);


    if(resultInMinutes === 1){
        return resultInMinutes + " minute";
    }else if(resultInMinutes < 60){
        return resultInMinutes + " minutes";
    } 
    
    else if( resultInHours === 1 ){
        return resultInHours + " hour"
    } else if( resultInHours < 24 ){
        return resultInHours + " hours"
    } 
    
    else if( resultInDays === 1 ){
        return resultInDays + " day"
    } else if( resultInDays < 30  ){
        return resultInDays + " days"
    }

    else if( resultInMonths === 1 ){
        return resultInMonths + " month"
    } else if( resultInMonths < 12  ){
        return resultInMonths + " months"
    }

    else if( resultInYears === 1 ){
        return resultInYears + " year"
    } else if( resultInYears > 1  ){
        return resultInYears + " years"
    }

}