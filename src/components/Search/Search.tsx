import React, {useRef, useState} from 'react';

import style from './Search.module.scss'
import {useDispatch} from "react-redux";
import {onResetFilters, setSearchValue} from "../../redux/Filter/slice";

export const Search: React.FC = () => {
	const dispatch = useDispatch();
	const [tempSearchValue, setTempSearchValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);
	const sendSearchValue = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (tempSearchValue) {
			dispatch(onResetFilters());
			dispatch(setSearchValue(tempSearchValue));
			inputRef.current?.blur();
		}
	}
	return (
		<div className={style.root}>
			<form role='search' onSubmit={sendSearchValue}>
				<input
					className={style.input}
					value={tempSearchValue}
					onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setTempSearchValue(evt.target.value)}
					type="text"
					placeholder='Поиск товаров..'
					ref={inputRef}
				/>
				<button className={style.search}>
					<svg xmlns="http://www.w3.org/2000/svg"
							 viewBox="0 0 30 30"
							 width="25px" height="25px">
						<path
							d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
						/>
					</svg>
				</button>
				{tempSearchValue &&
          <button className={style.reset} onClick={() => setTempSearchValue('')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="#000000" strokeWidth="2"
                    d="M7,7 L17,17 M7,17 L17,7"/>
            </svg>
          </button>
				}
			</form>
		</div>);
};