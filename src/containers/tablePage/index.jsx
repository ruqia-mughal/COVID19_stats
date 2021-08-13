import  dateFormat from "dateformat";
import React from "react";
import { connect } from "react-redux";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Table,Input, Button } from 'antd';
import "./table.css"
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Typography, Space } from 'antd';

const { Text, Link } = Typography;

const { Header, Footer, Sider, Content } = Layout;



class Tablepage extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };
  
  render() {
    const onChange =(pagination, filters, sorter, extra)=> {
      console.log('params', pagination, filters, sorter, extra);
    }
    const tableData = this.props.data.Countries
    // const date= this.props.data.Countries.Date.format('DD MMM, YYYY')


   
    
    const columns = [
     
      {
        key: 'Country',
        title: 'Country',
        dataIndex: 'Country',
      
        ...this.getColumnSearchProps('Country'),
        render: (name, row) => {
          return <div><img src={`https://www.countryflags.io/${row.CountryCode}/flat/64.png`} />
          {name}</div>
        }
      },
      {
        key: 'Date',
        title: 'Date',
        dataIndex: 'Date',
        render: (value, row, index) => {
          var date = dateFormat("mediumDate"); 
          var time = dateFormat("mediumTime");
          
          // var fields = value.split('T');
          // var date = fields[0];
          // var time = fields[1];
        //  var newtime= time.replace(/.106Z/g, ` Today`);
         
          return <span> <Text type="success"> Updated</Text> <br/>{date}<br/>{time}</span>;

            {/* {value.toLocaleString('').split('T')[0]} */}
              {/* {value.toLocaleString('').split('T')[1].split(':')[0]} */}
          {/* {value.toLocaleString('it-IT').split("T")[1]} */}
        
        },
      },
      {
        key: ' New Confirmed',
        title: 'New Confirmed',
        dataIndex: 'NewConfirmed',
        sorter: {
          compare: (a, b) => a.NewConfirmed - b.NewConfirmed,
          multiple: 3,
        },
     
       
      },
      {
        key: 'TotalConfirmed',
        title: 'Total Confirmed',
        dataIndex: 'TotalConfirmed',
        sorter: {
          compare: (a, b) => a.TotalConfirmed - b.TotalConfirmed,
          multiple: 3,
        },
  
      },
      {
        key: 'NewDeaths',
        
        title: 'New Deaths',
        dataIndex: 'NewDeaths',
        sorter: {
          compare: (a, b) => a.NewDeaths - b.NewDeaths,
          multiple: 3,
        },
        
      
      },
      {
        key: 'TotalDeaths',
        
        title: 'Total Deaths',
        dataIndex: 'TotalDeaths',
        sorter: {
          compare: (a, b) => a.TotalDeaths - b.TotalDeaths,
          multiple: 3,
        },
      },
      {
        key: 'NewRecovered',
  
        title: 'New Recovered',
        dataIndex: 'NewRecovered',
        sorter: {
          compare: (a, b) => a.NewRecovered - b.NewRecovered,
          multiple: 3,
        },

      },
      {
        key: 'TotalRecovered',
        
        title: 'Total Recovered',
        dataIndex: 'TotalRecovered',
        sorter: {
          compare: (a, b) => a.TotalRecovered - b.TotalRecovered,
          multiple: 3,
        },
      },
   

    ];

    return (
  
        <Layout>
         
          <Content className="responsive">
            <Table columns={columns} dataSource={tableData}   onChange={onChange}   
         />
          </Content>
          
        </Layout>
     
    )
      ;
  }
}
const mapStateToProps = (state) => ({
  data: state.Global

})

export default connect(mapStateToProps, null)(Tablepage);
