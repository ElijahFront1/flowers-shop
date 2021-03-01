import React from 'react'

const SortSettings = React.memo(function SortSettings({ items, onClickSortType, activeSortType }) {

    const [visiblePopup, setVisiblePopap] = React.useState(false);
    const activeLabel = items.find((obj) => obj.type === activeSortType).name;
    const sortRef = React.useRef();

    const toggleVisiblePopup = () => {
        setVisiblePopap(!visiblePopup);
    };

    const onSelectItem = index => {
        onClickSortType(index);
        setVisiblePopap(false);
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, []);


    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath()); 
        if (!path.includes(sortRef.current)) {
            setVisiblePopap(false); 
        }
    }

    return (
        <div ref={sortRef} className="sort">
            Сортировать  <span onClick={toggleVisiblePopup} className="sort-active"> {activeLabel}</span>
            {visiblePopup && <div className="sort-menu">
                <ul>
                    {items &&
                        items.map((obj, index) => (
                            <li onClick={() => onSelectItem(obj)}>
                                {obj.name}
                            </li>
                        ))}
                </ul>
            </div>}
        </div>
    )
})

export default SortSettings
