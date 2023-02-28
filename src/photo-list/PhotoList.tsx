import { useState } from "react";
import { Divider, Image, Input, Pagination, Table } from "antd";
import { GetPhotos } from "./PhotoListActions";

import type { ColumnsType } from "antd/es/table";
import type { GetPhotosParams } from "./PhotoListActions";
import type { PaginationProps } from "antd";
import type { SearchProps } from "antd/es/input";

const { Search } = Input;

interface PhotoType {
  key: React.Key;
  id: number;
  title: string;
  thumbnailUrl: string;
}

const columns: ColumnsType<PhotoType> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Thumbnail",
    dataIndex: "thumbnailUrl",
    key: "thumbnailUrl",
    render: (url) => <Image width={100} src={url} />,
  },
];

const DEFAULT_PARAMS: GetPhotosParams = {
  q: "",
  limit: 10,
  page: 1,
};

const PhotoList: React.FC = () => {
  const [params, setParams] = useState<GetPhotosParams>(DEFAULT_PARAMS);
  const { result, loading } = GetPhotos(params);

  const handlePageChange: PaginationProps["onChange"] = (page, limit) =>
    setParams({ ...params, limit, page });

  const handlePageSearch: SearchProps["onSearch"] = (q) =>
    setParams({ ...params, q });

  const { data, meta = {} } = result?.photos || {};
  const { totalCount = 0 } = meta;

  return (
    <>
      <Search
        placeholder="Filter by Title"
        size="large"
        loading={loading}
        onSearch={handlePageSearch}
      />
      <Divider />
      <Table
        loading={loading}
        columns={columns}
        dataSource={data || []}
        rowKey={({ id }) => id}
        pagination={false}
      />
      <Divider />
      <Pagination
        pageSize={params.limit}
        total={totalCount}
        onChange={handlePageChange}
        hideOnSinglePage
      />
    </>
  );
};

export default PhotoList;
