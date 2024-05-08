import React, { useEffect, useState } from 'react';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import { getTruthData } from '../../../Functions/API';
import LoadingIcon from '../../../Components/LoadingIcon/LoadingIcon';

interface TruthProps {
    isMainPage?: boolean;
}

const Truth: React.FC<TruthProps> = ({ isMainPage }) => {
    const [truthData, setTruthData] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTruthData();
            setTruthData(data);
            console.log(data); // Log the fetched data
        };
        fetchData();
    }, []);

    return (
        <div>
            {isMainPage && (
                <PageTitle
                    title="Truth - Discord Bot"
                />
            )}
            {truthData ? (
                <div>
                    <h2>{truthData.bot.id}</h2>
                    <p>{truthData.bot.username}</p>
                </div>
            ) : (
                <LoadingIcon size={80}/>
            )}
        </div>
    );
};

export default Truth;