<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public readonly User $user;
    public function __construct(){
        $this->user = new User();
    }

    public function index()
    {
        return /* User::all(); */
        $users = $this->user->all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //User::create($request->all());
        $created = $this->user->create([
            'user_name' => $request->input('user_name'),
            'user_email' => $request->input('user_email'),
        ]);

        if($created) {
            return redirect()->back()->with('message', 'Created user!');
        }

        return redirect()->back()->with('message', 'Error on create user.');
    }

    public function show(string $id)
    {
        //
    }

    public function edit(User $user)
    {
        $user = $this->user->find($id);
        var_dump($user);
    }

    public function update(Request $request, string $id)
    {
        $updated = $this->user->where('id', $id)->update($request->all());

        if($updated) {
            return redirect()->back()->with('message', 'Updated!');
        }

        return redirect()->back()->with('message', 'Error on update user data.');
    }

    public function destroy(string $id)
    {
        $this->user->where("id", $id)->delete();
        return redirect()->back()->with('message', 'Deleted user');
    }
}
