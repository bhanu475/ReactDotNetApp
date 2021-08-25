import React from 'react'
import { Card } from 'semantic-ui-react';

const ProgramCard = () => {
    return (
        <div>
            <Card 
                href='#card-example-link-card'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'            
            />
        </div>
    )
}

export default ProgramCard
