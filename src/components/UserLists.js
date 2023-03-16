import React from 'react';

const UserLists = ({aaa,bbb}) => {
    return (
        <ul>
            {aaa.map(li=><li key={li.id}>{li.username}</li>)}
        </ul>
    );
};

export default UserLists;