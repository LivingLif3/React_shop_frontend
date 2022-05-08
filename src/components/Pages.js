import React from "react";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";
import { setPageInfo } from "../store/DeviceReducer";

const Pages = ({totalCount, limit, pageState, setPageInfo}) => {
    const pageCount = Math.ceil(totalCount / limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    
    return(
        <Pagination className="mt-5">
            {pages.map(page => 
                <Pagination.Item
                    key={page}
                    active={pageState === page}
                    onClick={() => setPageInfo(page)}
                >
                    {page}
                </Pagination.Item>    
            )}
        </Pagination>
    )
}

let mapStateToProps = (state) => ({
    totalCount: state.deviceReducer.totalCount,
    limit: state.deviceReducer.limit,
    pageState: state.deviceReducer.page
})

export default connect(mapStateToProps, {setPageInfo})(Pages)