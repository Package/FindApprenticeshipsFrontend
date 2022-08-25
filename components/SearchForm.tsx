import React, { FC, FormEvent, useState } from 'react'
import { getLarsMappingsGrouped } from '../services/lars-service';
import { SearchState } from '../types';

interface SearchFormProps {
    onSearch: (state: SearchState) => void;
}

const MILE_INCREMENTS: number[] = [5, 10, 15, 20, 30, 40, 50];
const LARS_MAPPING = getLarsMappingsGrouped();

export const SearchForm: FC<SearchFormProps> = ({ onSearch }) => {
    const [location, setLocation] = useState<string>("");
    const [miles, setMiles] = useState<number>(5);
    const [larsCode, setLarsCode] = useState<string>("");

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        onSearch({
            location,
            miles,
            larsCode
        });
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="location" className="label">Your location</label>
                    <span className="label--help">Enter your postcode</span>
                    <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required autoCapitalize="characters" />
                </div>

                <div className="form-group">
                    <label htmlFor="miles" className="label">Within</label>
                    <select id="miles" value={miles} onChange={(e) => setMiles(Number.parseInt(e.target.value))} required>
                        {MILE_INCREMENTS.map(increment => (
                            <option value={increment} key={increment}>{`${increment} miles`}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="area" className="label">Area of interest</label>
                    <select id="area" value={larsCode} onChange={(e) => setLarsCode(e.target.value)}>
                        <option></option>
                        {[...LARS_MAPPING.keys()].sort().map(route => (
                            <optgroup key={route} label={route}>
                                {LARS_MAPPING.get(route)?.map(mapping => (
                                    <option value={mapping.larsCode} key={mapping.larsCode}>{mapping.title}</option>
                                ))}
                            </optgroup>
                        ))}
                    </select>
                </div>

                <button type="submit" className="button">Search</button>
            </form>
        </>
    )
}
