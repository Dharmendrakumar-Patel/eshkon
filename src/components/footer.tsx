import Link from 'next/link';

function Footer() {
  return (
    <footer className="w-full bg-[#f2f2ef] border-gray-200 dark:bg-gray-900 flex items-center justify-center py-3">
        <p>
            <span className='mr-2'>Createb By</span>
            <Link href="https://www.linkedin.com/in/dharmendrakumar-s-patel/" className='text-lg font-semibold'>
                Dharmendrakumar Patel
            </Link>  
        </p>
    </footer>
  );
}

export default Footer;
