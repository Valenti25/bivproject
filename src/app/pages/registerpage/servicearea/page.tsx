import Navbar from '@/app/components/navbar/page';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function RegisterServicePage() {
    return (
        <div className="container">
            <Navbar />

            <div className="flex items-center justify-center">
                <div className="mx-3 grid w-full grid-cols-3 items-center justify-center">
                    <div className="flex justify-start">
                        <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full border-2 border-black text-black">d</div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="text-black">สมัครบริการ</div>
                    </div>
                    <div className="flex justify-end">img</div>
                </div>
            </div>
            <form className="container w-full space-y-3 px-3">
                <h1 className="mt-5 mb-3 text-sm font-bold">พื้นที่ให้บริการ</h1>
                <InputGroup className="mt-1 flex h-10 items-center rounded-sm text-[#333333]">
                    <InputGroupInput type="search" placeholder="จังหวัด" aria-label="ค้นหา" />
                    <InputGroupAddon></InputGroupAddon>
                </InputGroup>
                <InputGroup className="mt-1 flex h-10 items-center rounded-sm text-[#333333]">
                    <InputGroupInput type="search" placeholder="จังหวัด" aria-label="ค้นหา" />
                    <InputGroupAddon></InputGroupAddon>
                </InputGroup>
                <h1 className="mt-5 mb-3 text-sm font-bold">พื้นที่ให้บริการ</h1>
                <InputGroup className="mt-1 flex h-10 items-center rounded-sm text-[#333333]">
                    <InputGroupInput type="search" placeholder="จังหวัด" aria-label="ค้นหา" />
                    <InputGroupAddon></InputGroupAddon>
                </InputGroup>
                <InputGroup className="mt-1 flex h-10 items-center rounded-sm text-[#333333]">
                    <InputGroupInput type="search" placeholder="จังหวัด" aria-label="ค้นหา" />
                    <InputGroupAddon></InputGroupAddon>
                </InputGroup>

                <div>
                    <h1 className="mt-5 text-sm font-bold">รูปถ่ายคู่บัตรประชาชน</h1>
                    <p className="mb-3 text-sm text-[#868686]">โปรดถือบัตรประชาชนของตนเองและถ่ายให้เห็นรายละเอียดชัดเจน</p>
                    <img src="/images/register-serviceimages/id-card.png" className="rounded-sm" alt="" />
                    <InputGroup className="mt-1 flex h-10 items-center rounded-sm text-[#333333]">
                        <InputGroupInput type="file" placeholder="จังหวัด" aria-label="ค้นหา" />
                        <InputGroupAddon></InputGroupAddon>
                    </InputGroup>
                </div>

                <div>
                    <h1 className="mt-5 text-sm font-bold">รูปถ่ายคู่บัตรประชาชน</h1>
                    <p className="mb-3 text-sm text-[#868686]">โปรดถือบัตรประชาชนของตนเองและถ่ายให้เห็นรายละเอียดชัดเจน</p>
                    <img src="/images/register-serviceimages/id-card.png" className="rounded-sm" alt="" />
                    <InputGroup className="mt-1 flex h-10 items-center rounded-sm text-[#333333]">
                        <InputGroupInput type="file" placeholder="จังหวัด" aria-label="ค้นหา" />
                        <InputGroupAddon></InputGroupAddon>
                    </InputGroup>
                </div>

                <div>
                    <form>
                        <h1 className="mt-5 mb-3 text-sm font-bold">พื้นที่ให้บริการ</h1>
                        <InputGroup className="mt-1 flex h-10 items-center rounded-sm text-[#333333]">
                            <InputGroupInput type="search" placeholder="จังหวัด" aria-label="ค้นหา" />
                            <InputGroupAddon></InputGroupAddon>
                        </InputGroup>
                        <h1 className="mt-5 mb-3 text-sm font-bold">พื้นที่ให้บริการ</h1>
                        <InputGroup className="mt-1 flex h-10 items-center rounded-sm text-[#333333]">
                            <InputGroupInput type="search" placeholder="จังหวัด" aria-label="ค้นหา" />
                            <InputGroupAddon></InputGroupAddon>
                        </InputGroup>
                        <h1 className="mt-5 mb-3 text-sm font-bold">พื้นที่ให้บริการ</h1>
                        <InputGroup className="mt-1 flex h-10 items-center rounded-sm text-[#333333]">
                            <InputGroupInput type="search" placeholder="จังหวัด" aria-label="ค้นหา" />
                            <InputGroupAddon></InputGroupAddon>
                        </InputGroup>
                        <h1 className="mt-5 mb-3 text-sm font-bold">พื้นที่ให้บริการ</h1>
                        <InputGroup className="mt-1 flex h-10 items-center rounded-sm text-[#333333]">
                            <InputGroupInput type="search" placeholder="จังหวัด" aria-label="ค้นหา" />
                            <InputGroupAddon></InputGroupAddon>
                        </InputGroup>
                        <h1 className="mt-5 text-sm font-bold">รูปถ่ายคู่บัตรประชาชน</h1>
                        <p className="mb-3 text-sm text-[#868686]">โปรดถือบัตรประชาชนของตนเองและถ่ายให้เห็นรายละเอียดชัดเจน</p>
                        <img src="/images/register-serviceimages/id-card.png" className="rounded-sm" alt="" />
                        <InputGroup className="mt-1 flex h-10 items-center rounded-sm text-[#333333]">
                            <InputGroupInput type="file" placeholder="จังหวัด" aria-label="ค้นหา" />
                            <InputGroupAddon></InputGroupAddon>
                        </InputGroup>
                    </form>
                    <div className="grid grid-cols-2 gap-2">
                        <Button className="mt-5 mb-10 w-full bg-red-600 text-white">ยกเลิก</Button>
                        <Link href="/pages/registerpage/bankaccountinformation">
                            <Button className="mt-5 w-full bg-green-600 text-white">ถัดไป</Button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
