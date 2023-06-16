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
import { customFetch } from 'src/utils/axios'
import Pagination from 'react-pagination-js'
import 'react-pagination-js/dist/styles.css' // import css
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
  CFormLabel,
  CFormSelect,
  CSpinner,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'

import { Api } from 'src/common/constant'
// import KolIcon from '../icons/everstarIcon/Kol'

const initialSearchFields = {
  nameSearch: '',
  emailSearch: '',
  isPayedSearch: '',
  // titleSearch: '',
}
const initialStatePage = {
  currentPage: 1,
  totalSize: 50,
  sizePerPage: 5,
  addMorePage: true,
  isLoading: false,
}
const CUsers = () => {
  // const dispatch = useDispatch()
  // const columnsControl = useSelector((store) => store.cusers.columnsControl)
  // const { userId, userName, status } = columnsControl
  const [paginate, setPaginate] = useState(initialStatePage)
  const [usersList, setUsersList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchFields, setSearchFields] = useState(initialSearchFields)

  // handle pagination
  const updateCurrentPage = (numPage) => {
    setPaginate((prev) => ({ ...prev, currentPage: numPage }))
  }
  const setAddMorePage = (isAddMore) => {
    setPaginate((prev) => ({ ...prev, addMorePage: isAddMore }))
  }

  const updateTotalSize = (stateChange) => {
    if (stateChange === 'update') {
      setPaginate((prev) => ({ ...prev, totalSize: prev.totalSize * 2 }))
    }
    if (stateChange === 'truncate') {
      setPaginate((prev) => ({ ...prev, totalSize: prev.sizePerPage * prev.currentPage }))
    }
    if (stateChange === 'reduce') {
      setPaginate((prev) => ({
        ...prev,
        totalSize: prev.totalSize - prev.sizePerPage,
        currentPage: 1,
      }))
    }
  }
  const changeCurrentPage = (numPage) => {
    updateCurrentPage(numPage)
  }
  // ----------------------------------------------------------------
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
  useEffect(() => {
    const getListUser = async () => {
      try {
        setIsLoading(true)
        const resp = await customFetch.get(Api.userPaginate, {
          page: paginate.currentPage,
          pageSize: paginate.sizePerPage,
        })
        setUsersList(resp.data.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getListUser()
  }, [paginate.currentPage])
  if (isLoading) return

  return (
    <div>
      {/* <AppBreadcrumb /> */}
      <div className="row-align ">
        <h5 style={{ margin: '0' }}>Customers</h5>
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
                <CTableHeaderCell>User name</CTableHeaderCell>
                <CTableHeaderCell>User email</CTableHeaderCell>
                <CTableHeaderCell>UserId</CTableHeaderCell>
                <CTableHeaderCell>Phone Number</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {usersList.map((item, index) => (
                <CTableRow v-for="item in tableItems" key={index}>
                  <CTableDataCell>
                    <div>{item.fullName}</div>
                    {/* <div className="small text-medium-emphasis">
                      Registered: {item.user.registered}
                    </div> */}
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{item.email}</div>
                  </CTableDataCell>
                  <CTableDataCell>{item._id}</CTableDataCell>
                  <CTableDataCell>+{item.phoneNumber}</CTableDataCell>
                  <CTableDataCell className="text-center">{item.status}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
          <div className="float-end margin-container">
            <Pagination
              currentPage={paginate.currentPage}
              totalSize={paginate.totalSize}
              theme="bootstrap"
              sizePerPage={paginate.sizePerPage}
              changeCurrentPage={changeCurrentPage}
              showFirstLastPages={true}
            />
          </div>
        </CCardBody>
      </CCard>
    </div>
  )
}
export default CUsers
