import './search-box.styles.css';

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <div>
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

// class SearchBox extends Component {
//   render() {
//     const { onChangeHandler, placeholder, className } = this.props;

//     return (
//       <div>
//         <input
//           className={className}
//           type="search"
//           placeholder={placeholder}
//           onChange={onChangeHandler}
//         />
//       </div>
//     );
//   }
// }

export default SearchBox;
