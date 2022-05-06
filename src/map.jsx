import React from 'react';

export class Map extends React.Component {
    render() {
        return (
            <div className='google-map-code'>
                <iframe
                    src='https://www.google.com/maps/d/embed?mid=1xI6ZIfZ3NnsSJmc7LNEV4xJfy1_f0Iqx&ehbc=2E312F'
                    width='100%'
                    height='250px'
                    style={{
                        border: '0px',
                    }}
                >
                </iframe>
            </div>
        );
    }
}

export default Map;
