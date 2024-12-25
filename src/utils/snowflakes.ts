export const createSnowflakes = () => {
    const snowflakeCount = 60; 
    const body = document.body;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄'; 
        snowflake.style.left = Math.random() * 100 + 'vw'; 
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; 
        snowflake.style.fontSize = Math.random() * 1 + 0.5 + 'em'; 
        body.appendChild(snowflake);
    }
    };