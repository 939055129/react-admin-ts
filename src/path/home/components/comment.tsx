/*
 * @Description: Night
 * @Date: 2021-03-12 16:38:26
 * @LastEditTime: 2021-03-15 14:00:20
 * @Version: 
 */
import React from "react"
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const listData: {
  href: string,
  title: string,
  avatar: string,
  description: string,
  content: string,
}[] = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
const IconText = (props: any) => {
  const { icon, text, } = props
  return (< Space >
    { React.createElement(icon)}
    { text}
  </Space >)
}

  ;
export default function commentList() {
  return (<List
    className="item"
    itemLayout="vertical"
    size="small"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 2,
    }}
    dataSource={listData}
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
  )
}