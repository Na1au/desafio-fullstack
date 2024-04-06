<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;

class Client  extends Model
{

    protected $fillable = [
      'client_name',
      'client_email',
      'client_phone',
      'client_address',
      'client_image'
    ];

    protected $hidden = [
      'created_at',
      'updated_at',
  ];

    protected $casts = [
      'imagem' => 'string',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}