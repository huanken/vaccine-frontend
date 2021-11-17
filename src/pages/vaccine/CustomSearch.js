import React from "react";
import {
    Button,
    Row,
    Col,
    InputGroupAddon
} from "reactstrap";
import { selectSearch } from "../../redux/selectors/vaccineSelector";
import { connect } from "react-redux";
import { Formik, FastField, Form } from 'formik';
import { ReactstrapInput } from "reactstrap-formik";

const CustomSearch = (props) => {

    const resetSearch = () => {
        props.onSearch("");
    }

    return (
        <Formik
            key={Date.parse(new Date())}    // fix bug: not-re-render when initialValues changing
            enableReinitialize
            initialValues={
                {
                    search: props.search ? props.search : ""
                }
            }
            onSubmit={
                values => {
                    props.onSearch(values.search);
                }
            }
        >
            <Form>
                <Row style={{ alignItems: "center" }}>
                    <Col xs="auto">
                        <FastField
                            bsSize="lg"
                            type="text"
                            name="search"
                            placeholder="Search Vaccine Info"
                            component={ReactstrapInput}
                        />
                    </Col>
                    <Col xs="auto">
                        <InputGroupAddon addonType="append" color="primary">
                            <Button type="submit">Search!</Button>
                        </InputGroupAddon>                  
                    </Col>
                    <Col xs="auto">                   
                        <InputGroupAddon addonType="append" color="primary">
                            <Button type="submit" color="danger" onClick = {resetSearch}>Reset Search!</Button>
                        </InputGroupAddon>
                    </Col>
                </Row>
            </Form>
        </Formik>
    );
};

const mapGlobalStateToProps = state => {
    return {
        search: selectSearch(state)
    };
};

export default connect(mapGlobalStateToProps)(CustomSearch);