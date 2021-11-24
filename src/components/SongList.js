import React from 'react';
import ListItem from './ListItem';

const SongList = ({ Songs }) => {
    console.log(Songs)

    const SongItems = Songs.map((Song) => {
        return <ListItem Song={Song} />;
    });

    return (
        <div>
            <ul>
                {SongItems}
            </ul>
        </div>
    );
}

export default SongList;