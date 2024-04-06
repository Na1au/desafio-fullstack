<?php

namespace App\Http\Controllers;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public readonly Client $client;
    public function __construct(){
        $this->client = new Client();
    }

    public function index($user_id)
    {
        return $cliente = Client::where('user_id', $user_id)->get();
    }

    public function store(Request $request)
    {
        $created = $this->client->create([
            'client_name' => $request->input('client_name'),
            'client_email' => $request->input('client_email'),
            'client_phone' => $request->input('client_phone'),
            'client_address' => $request->input('client_address'),
            'client_image' => $request->input('client_image'),
            'user_id' => $request->input('user_id')
        ]);

        if($created) {
            return redirect()->back()->with('message', 'Created client!');
        }

        return redirect()->back()->with('message', 'Error on create client.');
    }

    public function show(string $id)
    {
        //
    }

    public function edit(Client $client)
    {
        $client = $this->client->find($id);
        var_dump($client);
    }

    public function update(Request $request, string $id)
    {
        $updated = $this->client->where('id', $id)->update($request->all());

        if($updated) {
            return redirect()->back()->with('message', 'Updated!');
        }

        return redirect()->back()->with('message', 'Error on update client data.');
    }

    public function destroy(string $id)
    {
        $this->client->where("id", $id)->delete();
        return redirect()->back()->with('message', 'Deleted client');
    }
}
