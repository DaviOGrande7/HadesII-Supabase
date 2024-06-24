import { useState } from 'react';
import { Card, Button, Label, TextInput, Select } from 'flowbite-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://gdehsouqjqdgjwlbxkbz.supabase.co", 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZWhzb3VxanFkZ2p3bGJ4a2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MzUzNjksImV4cCI6MjAzMzAxMTM2OX0.GA-DWbB-9MpWaHuFioblPRaxPeF4y8osngwOty6Dssw"
);

function FormPage({ locations }) {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    keepsake: '',
    location_name: '',  // Ensure this matches the name of your state property
    codex_portrait: '',
    quote: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLocationChange = (e) => {
    setFormData({ ...formData, location_name: e.target.value });  // Update location_name specifically
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.rpc('post_char', {
        character_data: formData
      });

      if (error) {
        console.error('Error inserting data:', error.message);
        alert('Error inserting data: ' + error.message);
      } else {
        console.log('Data inserted successfully:', data);
        alert('Data inserted successfully!');
        setFormData({
          name: '',
          title: '',
          keepsake: '',
          location_name: '',
          codex_portrait: '',
          quote: ''
        });
      }
    } catch (error) {
      console.error('Error inserting data:', error.message);
      alert('Error inserting data: ' + error.message);
    }
  };

  return (
    <div className='justify-center p-20'>
      <Card>
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput id="name" type="text" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput id="title" type="text" value={formData.title} onChange={handleChange} required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="keepsake" value="Keepsake" />
            </div>
            <TextInput id="keepsake" type="text" value={formData.keepsake} onChange={handleChange} required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="location_name" value="Location" />
            </div>
            <Select id="location_name" value={formData.location_name} onChange={handleLocationChange} required>
              <option value="">Select Location</option> {/* Optional: Provide a default option */}
              {locations.map((location, index) => (
                <option key={index} value={location.name}>{location.name}</option>
              ))}
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="codex_portrait" value="Codex Portrait" />
            </div>
            <TextInput id="codex_portrait" type="text" value={formData.codex_portrait} onChange={handleChange} required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="quote" value="Quote" />
            </div>
            <TextInput id="quote" type="text" value={formData.quote} onChange={handleChange} required />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}

export default FormPage;
