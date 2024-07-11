import { useState } from 'react';
import { TableCard, TableHeader } from '@entities/Campaign';
import { CreateCampaignModal } from '@features/createCampaign';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container layout">
      <TableHeader setOpen={setOpen} />
      <TableCard />
      <CreateCampaignModal openModal={open} setOpenModal={setOpen} />
    </div>
  );
}

export default App;
