import { useState, useRef } from "react";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const paragraphRef = useRef();

  const inputHandler = (e) => {
    setInputSearch(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const escapedSearch = inputSearch.replace(/[.**?^${}()|[\]]]]/g, '\\$&');
    let pattern = new RegExp(`${escapedSearch}`, "gi");

    paragraphRef.current.innerHTML = paragraphRef.current.textContent.replace(pattern, match => `<mark>${match}</mark>`)
  }

  return (
    <>
      <div className="container">
        <h2 className="title">Highlight Searched Text</h2>
        <p className="sub-title">Search any text it highlights from the paragraph! 😊 </p>

        <div className="wrapper">
          <form onSubmit={submitHandler}>
            <input type="text" id="text-to-search" value={inputSearch} onChange={inputHandler} />
            <button type="submit">Search</button>
          </form>
        </div>

        <p className="paragraph" ref={paragraphRef}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius ornare nulla, eget bibendum odio consectetur vel. Cras facilisis odio dignissim nibh scelerisque rutrum. Suspendisse consequat non ex et tempor. Quisque non augue urna. Sed vel orci non nibh maximus iaculis vitae ac erat. Duis malesuada interdum congue. Donec et viverra libero. Cras vulputate sapien ac mi consequat, sit amet vestibulum magna pretium.Quisque maximus massa ac leo accumsan fringilla. Pellentesque tempus, nulla vitae tempor viverra, tellus felis aliquam lorem, faucibus accumsan dolor turpis eu massa. Nulla nec mollis nunc. Praesent tincidunt justo ac purus gravida rutrum. Maecenas tristique mollis tellus, id semper lacus pretium sed. Cras vitae ante est. Phasellus id eros metus. Fusce eu orci suscipit, congue ante non, tincidunt magna. Proin ut dui nulla. Nunc mollis justo quis fringilla blandit.
        </p>
      </div>
    </>
  )
}

export default App;
