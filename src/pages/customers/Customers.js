import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useState } from 'react'
// import { cusersList, updateCurrentPage, setAddMMorePage } from 'src/features/cusers/cusersSlice'
// import Pagination from 'react-pagination-js'
// import 'react-pagination-js/dist/styles.css' // import css
// import { showModal } from 'src/features/uiSlice'
// import SetToKolModal from './SetToKolModal'
// import ToggleBannedCuser from './ToggleBannedCuser'
// import NoSearchFound from '../myui/NoSearchFound'
// import FilterHideShowCtable from '../myui/FilterHideShowCtable'
// import FilterCtable from './FilterCtable'
import { AppBreadcrumb } from 'src/components'
// import { Link } from 'react-router-dom'
// import { avatarLink } from 'src/utils/helpers'
import {
  CContainer,
  CCard,
  CCardBody,
  CCol,
  CAvatar,
  CForm,
  CFormInput,
  CButton,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTable,
  CTableBody,
  CProgress,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CFormLabel,
  CFormSelect,
  CSpinner,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPeople,
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import { fakeTableData } from 'src/utils/fakeTableData'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
// import KolIcon from '../icons/everstarIcon/Kol'

const initialSearchFields = {
  nameSearch: '',
  emailSearch: '',
  isPayedSearch: '',
  // titleSearch: '',
}
const CUsers = () => {
  // const dispatch = useDispatch()
  // const columnsControl = useSelector((store) => store.cusers.columnsControl)
  // const { userId, userName, status } = columnsControl
  const [searchFields, setSearchFields] = useState(initialSearchFields)

  // const handleResetPagination = () => {
  //   dispatch(setAddMMorePage(true))
  //   dispatch(updateCurrentPage(1))
  // }
  const handleChangeSearchField = (e) => {
    const name = e.target.name
    const value = e.target.value
    setSearchFields({ ...searchFields, [name]: value })
  }

  const handleSubmitSearchFields = (e) => {
    e.preventDefault()
    // handleListUser()
    // handleResetPagination()
  }
  const clearSearchFields = () => {
    // handleResetPagination()
    setSearchFields({ ...initialSearchFields })
  }
  // useEffect(() => {
  //   handleListUser()
  // }, [currentPage])
  // console.log(currentPage)
  // console.log(searchFields)
  return (
    <div>
      {/* <AppBreadcrumb /> */}
      <div className="row-align ">
        <h5 style={{ margin: '0' }}>Người dùng</h5>
        <br />
      </div>
      <CCard>
        <CCardBody style={{ overflowY: 'visible' }}>
          <CAccordion className="accordion-normal">
            <CAccordionItem itemKey={1}>
              <CAccordionHeader>
                <h5>Search form</h5>
              </CAccordionHeader>
              <CAccordionBody>
                <CForm className="row g-3">
                  <CCol md={4}>
                    <CFormLabel htmlFor="inputSearchCuser">Name</CFormLabel>
                    <CFormInput
                      name="nameSearch"
                      type="text"
                      id="inputSearchCuser"
                      placeholder="Input name"
                      onChange={handleChangeSearchField}
                      value={searchFields.nameSearch}
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormLabel htmlFor="inputSearchCuserEmail">Search by email</CFormLabel>
                    <CFormInput
                      name="emailSearch"
                      type="text"
                      id="inputSearchCuserEmail"
                      placeholder="Input email"
                      onChange={handleChangeSearchField}
                      value={searchFields.emailSearch}
                    />
                  </CCol>
                  <CCol md={4}>
                    <CFormLabel htmlFor="inputSearchCuserBanned">Payed</CFormLabel>
                    <CFormSelect
                      aria-label="Default select example"
                      name="isPayedSearch"
                      id="inputSearchCuserBanned"
                      onChange={handleChangeSearchField}
                      value={searchFields.isPayededSearch}
                    >
                      <option value="">None</option>
                      <option value={true}>Yes</option>
                    </CFormSelect>
                  </CCol>
                  {/* <CCol md={4}>
                    <CFormLabel htmlFor="inputSearchCuserTitle">Title</CFormLabel>
                    <CFormSelect
                      aria-label="Default select example"
                      name="titleSearch"
                      id="inputSearchCuserTitle"
                      onChange={handleChangeSearchField}
                      value={searchFields.titleSearch}
                    >
                      <option value="">None</option>
                      <option value={true}>KOL</option>
                      <option value={false}>User</option>
                    </CFormSelect>
                  </CCol> */}
                  <CCol md={4}>
                    <CFormLabel>Clear search fields</CFormLabel>
                    <div className="d-grid">
                      <CButton
                        color="danger"
                        onClick={clearSearchFields}
                        // size="sm"
                        className="normal"
                      >
                        Clear fields
                      </CButton>
                    </div>
                  </CCol>
                  <CCol md={4}>
                    <CFormLabel>Submit search</CFormLabel>
                    <div className="d-grid">
                      <CButton
                        color="primary"
                        onClick={handleSubmitSearchFields}
                        // size="sm"
                        className="normal"
                      >
                        Submit
                      </CButton>
                    </div>
                  </CCol>
                </CForm>
              </CAccordionBody>
            </CAccordionItem>
          </CAccordion>

          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell className="text-center">
                  <CIcon icon={cilPeople} />
                </CTableHeaderCell>
                <CTableHeaderCell>User</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Preview</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Wedding Date</CTableHeaderCell>
                <CTableHeaderCell>Management</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {fakeTableData.map((item, index) => (
                <CTableRow v-for="item in tableItems" key={index}>
                  <CTableDataCell className="text-center">
                    <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{item.user.name}</div>
                    <div className="small text-medium-emphasis">
                      Registered: {item.user.registered}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <span>{Math.floor(Math.random() * 2) === 1 ? 'None' : 'Preview'}</span>
                  </CTableDataCell>
                  <CTableDataCell>Status</CTableDataCell>
                  <CTableDataCell className="text-center">Wedding date</CTableDataCell>
                  <CTableDataCell>management</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
          {/* {cusers.length === 0 ? <NoSearchFound title="users" /> : ''}
          {totalSize > sizePerPage ? (
            <div className="float-end margin-container">
              <Pagination
                currentPage={currentPage}
                totalSize={totalSize}
                theme="bootstrap"
                sizePerPage={sizePerPage}
                changeCurrentPage={changeCurrentPage}
                showFirstLastPages={true}
              />
            </div>
          ) : (
            ''
          )} */}
        </CCardBody>
      </CCard>
    </div>
  )
}
export default CUsers
