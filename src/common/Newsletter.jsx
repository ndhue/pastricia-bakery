import { ArrowRightIcon } from '@heroicons/react/24/outline'
export default function Newsletter() {
  return (
    <div className='relative text-tertiary'>
        <div className="isolate overflow-hidden bg-[url('https://cdn.shopify.com/s/files/1/0565/9757/7916/files/Group_906.jpg?v=1650477935')] bg-cover bg-center bg-no-repeat py-16 sm:py-24 lg:py-32 text-center opacity-50 h-[350px]">
            
        </div>
        <div className="absolute inset-x-[10%] inset-y-[25%] lg:inset-[25%] mx-auto text-center w-3xl lg:w-xl">
        <h2 className="text-xl md:text-3xl font-bold tracking-tightsm:text-4xl">Join our Newsletter</h2>
        <p className="mt-3 text-[14px] md:text-lg leading-8">
        Get the freshest Pastricia updates and offers right to your inbox! Plus, enjoy 10% off on your birthday when you share the date with us!
        </p>
        <div className="mx-auto mt-6 flex max-w-md gap-x-4">
        <label htmlFor="email-address" className="sr-only">
            Email address
        </label>
        <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto bg-white5 px-3.5 bg-white w-full border border-slate-300 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-secondary focus:ring-1 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
        />
        <button
            type="submit"
            className="flex-none rounded-md bg-secondary py-2.5 px-3.5 text-white shadow-sm hover:bg-primary ease-in-out duration-300"
        >
            <ArrowRightIcon className="block h-6 w-6"/>
        </button>
        </div>
        </div>
</div>
  )
}