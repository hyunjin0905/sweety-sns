import React, { FC } from "react"
import PropTypes from "prop-types";
import { StopOutlined } from '@ant-design/icons';
import { Button, Card, List } from "antd";


interface FollowListProps {
    header: string,
    data: any

}
const FollowList:FC<FollowListProps> = (props) => {
    const { header, data } = props;
    return (
        <List
            header={<div>{header}</div>}
            size="small"
            grid={{ gutter:4, xs: 2, md: 3 }}
            loadMore={<div style={{ textAlign: "center", margin: "10px 0" }}> <Button>더 보기</Button> </div>}
            bordered
            dataSource={data as any}
            renderItem={() => (
                <List.Item>
                     <Card actions={[ <StopOutlined /> ]}>

                     </Card>
                </List.Item>
            )}
        >
        </List>
    )
}

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired as any
}

export default FollowList;