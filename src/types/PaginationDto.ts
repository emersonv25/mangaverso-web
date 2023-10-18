type PaginationDto<T> = {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    data: T;
}

export default PaginationDto