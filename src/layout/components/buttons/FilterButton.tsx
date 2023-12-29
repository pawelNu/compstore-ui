export const FilterButton = () => {
    return (
        <div>
            <button type="submit" className="btn btn-primary">
                Filter
                <svg
                    className="ms-2"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                >
                    <path
                        d="M19.479 2l-7.479 12.543v5.924l-1-.6v-5.324l-7.479-12.543h15.958zm3.521-2h-23l9 15.094v5.906l5 3v-8.906l9-15.094z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
    );
};
