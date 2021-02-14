const FilesComponent = (prop) => {
    const {files} = prop || [];
    return (
        <div>
            <ul>
                {
                    Object.keys(files).map(key => <li><a href={files[key].raw_url} target="_blank">{key}</a></li>)
                }
            </ul>
        </div>
    )
}

export default FilesComponent;