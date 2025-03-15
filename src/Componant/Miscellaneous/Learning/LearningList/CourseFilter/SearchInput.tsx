import { Input } from 'reactstrap'
import { SearchLearningPlaceholder } from '../../../../../utils/Constant'
import { Search } from 'react-feather'

const SearchInput = () => {
  return (
    <div className="job-filter">
      <div className="faq-form">
        <Input type="text" placeholder={SearchLearningPlaceholder}/>
        <Search className="search-icon" />
      </div>
    </div>
  )
}

export default SearchInput