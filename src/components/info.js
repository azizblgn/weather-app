import {WiSunset} from 'react-icons/wi';

function Info({info, state}) {
    return (
    <div>
        {
            state ? <div className="info">
                            <p id="sehir">{info.name}, {info.sys.country}</p>
                        <div className="genelDeger">
                            <p id="sicaklik">{info.main.temp.toFixed(1)} C° </p><WiSunset className='fa-c' />
                        </div>
                            <p id="havadurumu">{info.weather[0].description}</p>
                        <div className="his">
                            <p id="hissedilen">Hissedilen: {info.main.feels_like.toFixed(1)} C° </p>
                        </div>
                    </div> : null
        }
    </div>
    )
}

export {Info};