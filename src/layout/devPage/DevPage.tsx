import devKirill from '../../assets/devAvatar/devKirill.jpg'
import devDima from '../../assets/devAvatar/devDima.jpg'
import devIlya from '../../assets/devAvatar/devilya.jpg'
import {ImageList, ImageListItem} from '@mui/material';
import React from 'react';

export const DevPage = () => {
    const dev = [
        {id: 1, name: 'Kirill', src: devKirill},
        {id: 2, name: 'Dima', src: devDima},
        {id: 3, name: 'Ilya', src: devIlya},
    ]

    return (
        <ImageList sx={{width: 600, height: 500, margin: '0 auto', marginTop: '40px',}}
                   variant="woven" cols={3} gap={30}>
            {dev.map((d) => (
                <ImageListItem key={d.id}>
                    <div key={d.id}>{d.name}</div>
                    <img
                        // style={}
                        src={`${d.src}?w=161&fit=crop&auto=format`}
                        srcSet={`${d.src}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        alt={d.name}
                        // loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};

