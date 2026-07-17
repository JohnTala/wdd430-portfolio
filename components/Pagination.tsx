'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {
  totalPages: number;
};

export function Pagination({ totalPages }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;

  function createPageURL(pageNumber: number) {
    const params = new URLSearchParams(searchParams);

    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  }

  return (
    <div>
      {currentPage > 1 && (
        <Link href={createPageURL(currentPage - 1)}>
          Previous
        </Link>
      )}

      <span>
        {" "}Page {currentPage} of {totalPages}{" "}
      </span>

      {currentPage < totalPages && (
        <Link href={createPageURL(currentPage + 1)}>
          Next
        </Link>
      )}
    </div>
  );
}