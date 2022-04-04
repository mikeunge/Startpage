import type { NextPage } from 'next'

import Card from '../components/Card';
import CardIf from '../interfaces/Card';

const Home: NextPage = () => {
    const cardProps: CardIf = { title: 'Hello World!', elements: ['abc', 'abce'] };

    return (
        <div className='container mx-auto'>
            <div className='flex flex-col justify-center'>
                <div className='text-4xl pb-8 pt-4'>Startpage</div>
                <div className='grid grid-cols-4 gap-8'>
                    <Card {...cardProps} />
                    <Card {...cardProps} />
                    <Card {...cardProps} />
                    <Card {...cardProps} />
                </div>
            </div>
        </div>
    )
}

export default Home
